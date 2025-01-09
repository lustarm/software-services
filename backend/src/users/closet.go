package users

import (
	"backend/src/util"
	"encoding/json"
	"net/http"
	"time"
)

// Item structure.
type Item struct {
	OwnerHash    string    `json:"ownerHash"`       // Owner's hashed user ID
	ID           uint64    `json:"itemID"`          // Item ID
	Name         string    `json:"itemName"`        // Item name
	Description  string    `json:"itemDescription"` // Item description
	CreationDate time.Time `json:"creationDate"`    // Creation date
	Price        int       `json:"price"`           // Price in some unit
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
