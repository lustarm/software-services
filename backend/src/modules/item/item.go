package item

import (
	"time"
)

type Item struct {
	OwnerID      int       `json:"ownerID"` // Owners UserID
	ID           uint64    `json:"itemID"`  // 18,446,744,073,709,551,615 if you need more then this then i dont know
	Name         string    `json:"itemName"`
	Description  string    `json:"itemDescription"`
	CreationDate time.Time `json:"creationDate"`
	Price        int       `json:"price"`
}
