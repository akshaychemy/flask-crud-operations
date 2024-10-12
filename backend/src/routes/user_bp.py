from flask import Blueprint
from src.controllers.user_controller import register_user, login_user, get_users, get_user, update_user, delete_user

user_bp = Blueprint('user_bp', __name__)

# Register route
user_bp.route('/register', methods=['POST'])(register_user)

# Login route
user_bp.route('/login', methods=['POST'])(login_user)

# CRUD routes
user_bp.route('/users', methods=['GET'])(get_users)               # Get all users
user_bp.route('/users/<int:user_id>', methods=['GET'])(get_user)   # Get single user by ID
user_bp.route('/users/<int:user_id>', methods=['PUT'])(update_user) # Update user by ID
user_bp.route('/users/<int:user_id>', methods=['DELETE'])(delete_user) # Delete user by ID
