package users

import (
	"backend/src/modules/item"
	"time"
)

// Mock function to fetch a user's closet.
// Use from later on
func fetchUserCloset(_ string) UserCloset {
	// Example data for demonstration.
	return UserCloset{
		Items: []item.Item{
			{
				OwnerID:      1,
				ID:           1,
				Name:         "Fancy Hat",
				Description:  "A fancy hat with feathers",
				CreationDate: time.Now(),
				Price:        100,
			},
			{
				OwnerID:      2,
				ID:           2,
				Name:         "Elegant Coat",
				Description:  "A stylish coat for winter",
				CreationDate: time.Now(),
				Price:        250,
			},
		},
	}
}
