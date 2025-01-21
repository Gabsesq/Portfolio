import { Html } from "@react-three/drei";

export default function BlogScreen() {
    return (
        <Html
            transform
            wrapperClass="laptop-screen"
            position={[0, 10.8, -10]}
            rotation-x={0}
            rotation-y={0}
            rotation-z={0}
            distanceFactor={15}
            occlude
        >
            <div style={{
                width: '735px',
                height: '440px',
                background: '#FFF0F6', // Light pink background
                padding: '20px',
                border: '1px solid #FFB0D9', // Pink border
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                fontFamily: 'Arial, sans-serif',
                color: '#FF69B4', // Pink text
                overflow: 'auto',
                fontSize: '14px',
                boxShadow: 'inset 0 0 20px rgba(255, 182, 193, 0.3)' // Soft pink inner glow
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <h2 style={{ 
                        margin: 0, 
                        fontSize: '36px',
                        color: '#FF69B4',
                        textShadow: '2px 2px 4px rgba(255, 105, 180, 0.2)'
                    }}>
                        ✨ My Blog ✨
                    </h2>
                </div>

                {/* Blog Posts */}
                <div style={{
                    background: '#FFF',
                    padding: '20px',
                    borderRadius: '12px',
                    marginBottom: '15px',
                    boxShadow: '0 4px 8px rgba(255, 182, 193, 0.2)',
                    border: '1px solid #FFE4E1'
                }}>
                    <h3 style={{ 
                        margin: '0 0 10px 0', 
                        fontSize: '20px',
                        color: '#FF69B4'
                    }}>
                        Making this website
                    </h3>
                    <p style={{ 
                        margin: '0 0 10px 0', 
                        fontSize: '14px', 
                        color: '#FF8FAB',
                        lineHeight: '1.6'
                    }}>
                        Making this website has taught me the importance of pre-planning my ideas...
                        I've been exploring 3D graphics and creating immersive experience which has been very exciting,
                        but too exciting. A common theme of my projects is that I get too excited and start working on them before I have a plan.
                        This is a lesson I will take with me into the future. The issue with this approach is that it ends up taking me double the time to complete a project.
                        I love the artistic aspect of bringing ideas to life, and usually I lean toward a creative process (digital art, sewing, working in Blender) but when it comes to 
                        programming, I have a tendency to lean toward the functionality side which is telling. At the same time, the functionality side
                        requires planning too. The more projects I make and the more I study system design, the more I learn that I don't know. This is what attracted
                        me to software development in the first place. The endless rabbit holes of knowledge continue to move the goal post and allow me more autonomy over my
                        ideas. So in some ways, messing up from the beginning probably teaches me more. At the same time, I am someone who is constantly watching the calendar and stressing
                        that I am wasting time. This is another life lesson I have been working on. Balancing technical progress and burnout, my endless project ideas and the 
                        inevitable stress of time management. Some steps I've taken to take back control of my life: Deleting video games, limiting my social media. If I have an urge to use 
                        social media, I read a book instead. I also find that changing my environment helps me avoid burnout for some reason. I have a passion for creation, and losing that 
                        passion would be devastating for me. That is why as much as I advocate for consistent learning, I also advocate for consistent rest and balance. Getting more sleep has 
                        actually helped my productivity and has made me a significantly more efficient developer. Without my sleep, I may as well do nothing. I lived my college with so little
                        sleep, and I wish I had prioritized it more as there is a significant difference in what I can and can't learn when tired. I think these lessons I've learned are pretty
                        easy conclusions to come to, but it took me living through them to understand their importance.
                    </p>
                    <div style={{ 
                        fontSize: '12px', 
                        color: '#FFB6C1',
                        fontStyle: 'italic'
                    }}>
                        Posted on January 1, 2025 • 3 min read ✨
                    </div>
                </div>
            </div>
        </Html>
    );
} 