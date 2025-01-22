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
                        Trump Inauguration
                    </h3>
                    <p style={{ 
                        margin: '0 0 10px 0', 
                        fontSize: '14px', 
                        color: '#FF8FAB',
                        lineHeight: '1.6'
                    }}>
                        It is an odd time to be alive in America..... Some of my side passions include deep diving into history and politics. 
                        Today is the day after Trump's inauguration, and I'm feeling extra overwhelmed, helpless, and fearful that 
                        history will repeat itself once again. My take on this presidency is that it is a reflection of so many 
                        dark parts of our history and underlying culture. I'm going to talk about the perfect tsunami that started 
                        and is not stopping, at least my take on what is happening. What do all terrifying genocides and extremist 
                        movements have in common? Fear mongering. If you demonize a group of people, tensions are bound to rise. I 
                        am young at 25 years old, up for debate, and I feel that from my perspective, I watched Obama inspire hope 
                        in me, an 8 year old girl. Obama was able to elicit emotion, and me being young, I knew he is the man I 
                        wanted as my president. Here's the catch. I didn't know a single policy. What is a democrat? Republiwho? And 
                        as an adult who indulges in history a little bit too much, I am watching a group of adults feel that same 
                        intensity of emotion that I felt at 8 years old. The democratic party has fallen short on inspiring hope since 
                        Obama. As a grown, mathematically and pattern inclined woman, I do not care as much about the underlying 
                        emotion the politician is trying to evoke. What I do care about is the policy and PLAN being put forward. 
                        Unfortunately, I'm watching a wave of people who are overtaken by emotion, by fear of niche crowds and exaggerated 
                        fears. I remember dating someone who supported Trump around 2016, and I remember claims of 'democrats are 
                        aborting babies after they're born!' on a large news station... This was the first time I became worried 
                        about the future of our country. I feel like historically, when fascist regimes rise, they feed as much 
                        misinformation as possible to make citizens question their own reality. To the point you can't trust any source 
                        of media or information. I personally, as someone who is critical of all of my media, I feel that finding credible 
                        information becomes harder and harder. Everything feels extremely biased and intense, and sometimes I don't 
                        even trust my government. Things I think influenced this era the most: Covid and global inflation, redpill 
                        blackpill social media content, fear mongering and eliciting emotion, and social media influence with addictive algorithms that 
                        radicalize people, demonizing groups of people. Some of those tie together. By the way, if anyone is reading this 
                        and is a Trump supporter, I'm always open to discussion. One thing I've learned is that there is always more 
                        to learn. I'm saying I'm open to being contradicted and adopting a new viewpoint. Everything I've said here 
                        is only my opinion. My only credibility is that I find joy in learning about history, politics, and I'm an 
                        American citizen who is passionate about the future of my country. Now I want to end this with predictions. 
                        I think our country is very up in the air right now. This could be a fresh wound of the election that is making me so dramatic, but 
                        I am truly feeling fearful. I am fearful for my friends who where brought to this country at 5 years old. I am 
                        fearful for the lower and middle class. I am fearful for the change in my pockets. I am fearful for the extent 
                        the oligarchy will go to make another dime. I am fearful to be homeless and have no backup net. I am fearful 
                        for extremist verbiage about revoking women's rights. I am fearful extremists will be emboldened, now more 
                        than ever. I remember the first election felt dystopian, but this election just feels dark. This election feels 
                        like there are two potential outcomes: Citizens will revolt once corruption touches every area of their lives, OR 
                        everything will continue to get worse until we reach a revolution. I feel like we're at the end of the road, 
                        based on pattern recognition, but there is a great possibility that I am completely off base and misinformed, 
                        which hopefully is the answer in this case.
                    </p>
                    <div style={{ 
                        fontSize: '12px', 
                        color: '#FFB6C1',
                        fontStyle: 'italic'
                    }}>
                        Posted on January 21, 2025 • 5 min read ✨
                    </div>
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