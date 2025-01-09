package users

import (
	"backend/src/jwt"
	"backend/src/util"
	"encoding/json"
	"net/http"
	"strings"
)

// Updated VerifyToken function with detailed error response
func VerifyToken(w http.ResponseWriter, r *http.Request) {
	authHeader := r.Header.Get("Authorization")
	if authHeader == "" {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Authorization header missing"})
		return
	}

	// Check if the header format is valid and extract the token
	parts := strings.Split(authHeader, " ")
	if len(parts) != 2 || strings.ToLower(parts[0]) != "bearer" {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid Authorization header format"})
		return
	}

	token := parts[1]

	// Verify the token
	err := jwt.VerifyToken(token)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: err.Error()})
		return
	}

	// If token is valid check if it belongs to a user
	// O(2n) **CHANGE THIS** IMPORTANT
	for _, user := range users {
		for _, userSessionID := range user.SessionIDs {
			if token == userSessionID {
				// Return success response
				w.WriteHeader(http.StatusOK)
				json.NewEncoder(w).Encode(util.APIResponse{Error: false, Message: "Verified token"})
				return
			}
		}
	}

	// Return error response
	w.WriteHeader(http.StatusUnauthorized)
	json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid token"})
}
