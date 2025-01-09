package util

// Response structure for API response.
type APIResponse struct {
	Error   bool        `json:"error"`
	Message string      `json:"message"`
	Data    interface{} `json:"data,omitempty"` // Include data in successful responses.
}
