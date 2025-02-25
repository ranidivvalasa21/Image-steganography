

# **Image Steganography using LSB Technique**  

A web-based steganography application that allows users to hide and retrieve secret messages in images using the **Least Significant Bit (LSB) technique**. The backend is built with **Python (Flask)**, while the frontend uses **HTML, CSS, and JavaScript**.  

## **Project Structure**  

```
│   app.py                 # Flask backend for encoding/decoding messages
│   README.md              # Project documentation
│   requirements.txt       # Dependencies list
│
├───static                 # Static frontend assets
│   │   script.js          # Handles UI interactions and API calls
│   │   style.css          # Styling for the web interface
│   │
│   └───uploads            # Stores encoded images
│           encoded_image.png
│           encoded_image_4.png
│           Screenshot_2024-11-05_192407.png
│
├───templates              # HTML templates for Flask
│       index.html         # Main web interface
│
└───uploads                # Directory to save user-uploaded images
```

---

## **Features**  

### 🔒 **Encryption**  
- Hides a **secret message** inside an image using **LSB steganography**.  
- Encrypts the message using a **user-provided key** for added security.  
- Saves the **encoded image** for later retrieval.  

### 🔓 **Decryption**  
- Extracts the hidden message from an encoded image.  
- Requires the **correct key** to access the hidden text.  

### 🖥 **User-Friendly Interface**  
- Interactive **web-based UI** built with **HTML, CSS, and JavaScript**.  
- Supports **drag-and-drop image upload** and **real-time encryption/decryption**.  

### 📂 **Secure Storage**  
- Uses a **header** to store metadata like message length for accurate extraction.  

---

## **Installation & Setup**  

### **Prerequisites**  
Ensure you have **Python 3.x** installed.  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/ranidivvalasa21/Image-steganography
cd image-steganography
```

### **2️⃣ Install Dependencies**  
```sh
pip install -r requirements.txt
```

### **3️⃣ Run the Flask Server**  
```sh
python app.py
```
The server will start at **http://127.0.0.1:5000/**.  

---

## **Usage**  

### **1️⃣ Open the Web Interface**  
Navigate to `http://127.0.0.1:5000/` in your browser.  

### **2️⃣ Encode a Message**  
1. Upload an image.  
2. Enter the secret message and a security key.  
3. Click **"Encode"** to generate the steganographic image.  

### **3️⃣ Decode a Message**  
1. Upload the encoded image.  
2. Enter the correct security key.  
3. Click **"Decode"** to reveal the hidden message.  

---

## **Tech Stack**  

- **Backend**: Flask (Python)  
- **Frontend**: HTML, CSS, JavaScript  
- **Libraries**: OpenCV, NumPy, Pillow  

---

## **License**  

This project is licensed under the **MIT License**.  

---

## **Contributing**  

Contributions are welcome! Feel free to submit **issues** or **pull requests**.  

---

## **Author**  

👤 **Your Name**  
🔗 GitHub: https://github.com/ranidivvalasa21 (Rani-Divvalasa)

---

