package users

// get from DB
// Obv were not going to grab all of them just grab them as we go
var users []User

// Will use this in DB later
var idCounter int

type User struct {
	ID         int        `json:"id"`
	Role       string     `json:"role"`
	Email      string     `json:"email"`
	Username   string     `json:"username"`
	Password   string     `json:"password"`
	Closet     UserCloset `json:"closet"`
	SessionIDs []string   `json:"sessionIDS"`
}
