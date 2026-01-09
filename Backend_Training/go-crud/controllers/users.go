package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"

	"go-crud/models"
)

var users = []models.User{
	{ID: 1, Name: "Sakshi", Email: "sakshijain@example.com", Role: "admin"},
	{ID: 2, Name: "Bhumika", Email: "bhumika@example.com", Role: "user"},
}

/* GET /health */
func HealthCheck(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(map[string]string{
		"status": "ok",
	})
}

/* GET /users
   POST /users */
func UsersHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	switch r.Method {

	case http.MethodGet:
		role := r.URL.Query().Get("role")

		if role != "" {
			filtered := []models.User{}
			for _, u := range users {
				if u.Role == role {
					filtered = append(filtered, u)
				}
			}
			json.NewEncoder(w).Encode(filtered)
			return
		}

		json.NewEncoder(w).Encode(users)

	case http.MethodPost:
		var newUser models.User
		if err := json.NewDecoder(r.Body).Decode(&newUser); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		if newUser.Name == "" || newUser.Email == "" {
			http.Error(w, "Name and email are required", http.StatusBadRequest)
			return
		}

		newUser.ID = len(users) + 1
		users = append(users, newUser)

		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(newUser)

	default:
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
	}
}

/* GET /users/{id} */
func UserByIDHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	idStr := strings.TrimPrefix(r.URL.Path, "/users/")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Invalid user ID", http.StatusBadRequest)
		return
	}

	for _, u := range users {
		if u.ID == id {
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(u)
			return
		}
	}

	http.Error(w, "User not found", http.StatusNotFound)
}
