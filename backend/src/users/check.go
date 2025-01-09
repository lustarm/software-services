package users

import (
	"backend/src/jwt"
	"backend/src/util"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

// Updated CheckUser function with detailed error response
func CheckUser(w http.ResponseWriter, r *http.Request) {
	var credentials CheckUserRequest

	err := json.NewDecoder(r.Body).Decode(&credentials)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid request"})
		return
	}

	for i, user := range users {
		if user.Username == credentials.Username && user.Password == credentials.Password {

			token, err := jwt.CreateToken(user.Username, strconv.Itoa(user.ID))
			if err != nil {
				w.WriteHeader(http.StatusUnauthorized)
				json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Failed to create authorization token"})
				return
			}

			users[i].SessionIDs = append(users[i].SessionIDs, token)

			w.Header().Set("Authorization", fmt.Sprintf("Bearer %v", token))

			json.NewEncoder(w).Encode(util.APIResponse{Error: false, Message: token})
			return
		}
	}

	// No match found, return invalid response
	w.WriteHeader(http.StatusUnauthorized)
	json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid username or password"})
}
