package users

import (
	"backend/src/util"
    "backend/src/modules/item"
	"encoding/json"
	"net/http"
)

// closet.go
type UserCloset struct {
	Items []item.Item `json:"userItems"`
}

type GetUserClosetRequest struct {
	Username string `json:"username"`
}

// Mock user validation function.
func userIsValid(target string) bool {
	// Simulating a user list.
	// users := []string{"Alice", "Bob", "Charlie"}

	for _, user := range users {
		if user.Username == target {
			return true
		}
	}
	return false
}

// Handler for fetching user closet.
func GetUserCloset(w http.ResponseWriter, r *http.Request) {
	var request GetUserClosetRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Invalid request"})
		return
	}

	if request.Username == "" {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "Username cannot be empty"})
		return
	}

	if !userIsValid(request.Username) {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(util.APIResponse{Error: true, Message: "User not found"})
		return
	}

	// Fetch user closet.
	closet := fetchUserCloset(request.Username)

	// Respond with the user closet.
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(util.APIResponse{Error: false, Message: "Success", Data: closet})
}
