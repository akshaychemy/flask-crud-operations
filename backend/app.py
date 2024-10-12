from flask import Flask
from flask_cors import CORS
from src.config.config import create_app,db
# from src.config.database import init_db
from src.routes.user_bp import user_bp
from flask_jwt_extended import JWTManager

app = create_app()

# Enable CORS globally with default settings (allow all origins)
CORS(app)

# Initialize extensions
# init_db(app)
jwt = JWTManager(app)

# Register blueprints
app.register_blueprint(user_bp)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        app.run(debug=True)