import { Html } from "@react-three/drei";
import { useState } from "react";

export default function ContactScreen() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <Html
            transform
            wrapperClass="ipad-screen"
            position={[0, 38.5, 0.1]}
            rotation-x={0}
            rotation-y={3.15}
            rotation-z={0}
            distanceFactor={40}
            occlude={false}
        >
            <div style={{
                width: '512px',
                height: '695px',
                background: 'linear-gradient(145deg, #f0f0f0, #e6e6e6)',
                padding: '20px',
                borderRadius: '20px',
                fontFamily: 'Arial, sans-serif',
                color: '#333',
                overflow: 'auto',
                boxShadow: 'inset 0 0 10px rgba(0,0,0,0.1)',
                transform: 'scale(-1, 1)'
            }}>
                <h2 style={{ 
                    margin: '0 0 15px 0',
                    fontSize: '24px',
                    color: '#2c3e50',
                    textAlign: 'center'
                }}>
                    Contact Me
                </h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: '4px solid #ddd',
                            fontSize: '16px'
                        }}
                        required
                    />
                    
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: '4px solid #ddd',
                            fontSize: '16px'
                        }}
                        required
                    />
                    
                    <textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: '4px solid #ddd',
                            height: '100px',
                            resize: 'none',
                            fontSize: '16px',
                            fontFamily: 'Arial, sans-serif',
                            lineHeight: '1.4',
                            backgroundColor: 'white'
                        }}
                        required
                    />
                    
                    <button
                        type="submit"
                        style={{
                            padding: '12px',
                            borderRadius: '8px',
                            border: 'none',
                            background: '#0084ff',
                            color: 'white',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'background 0.3s',
                            fontWeight: 'bold'
                        }}
                    >
                        Send Message
                    </button>
                    
                    {status && (
                        <div style={{
                            textAlign: 'center',
                            fontSize: '16px',
                            color: status.includes('success') ? '#2ecc71' : '#e74c3c'
                        }}>
                            {status}
                        </div>
                    )}
                </form>
            </div>
        </Html>
    );
} 