from fastapi import FastAPI, Response
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()


origins = [
    "http://localhost:3000", # Simple nodejs dev server with fetch
    "http://localhost:5173", # React dev server with axios
]

# cors settting 
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins, # Should be the same as the client's origin. '*' doesn't not allow credentials
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

@app.get("/setcookie/")
def set_cookie(response: Response):
    response.set_cookie(
        key="cookie",
        value="test",
        samesite="none",
        secure=True,
        max_age=10000)
    return {"message": "Cookie set. Check in browser tools."}



if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)