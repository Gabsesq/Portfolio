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
                        Misinformation
                    </h3>
                    <p style={{ 
                        margin: '0 0 10px 0', 
                        fontSize: '14px', 
                        color: '#FF8FAB',
                        lineHeight: '1.6'
                    }}>
                        I'm feeling particularly worried about journalism in this country. At the same time, I'm also worried about fabricated truths. It feels very apparent that the United States 
                        is leaning toward an oligarchial government structure. The top of this hierarchy consists of CEO's of the world's largest social media platforms, which is a 
                        new challenge we have never faced to this extent. In my previous blog post, I discussed prominent platforms spewing misinformation. There has been a stark shift 
                        over my lifetime from primary journalism coming from our television networks, and now the new media consumption is social media which can be quite dangerous.
                        It is telling to me that the week of Trump's inauguration, Mark Zuckerberg, the CEO of Facebook, is now rolling back the fact checking features of Facebook. 
                        I have grandparents. I have younger cousins. I have people my age and middle age adults in my life who I watch absorb propaganda and misinformation. As someone 
                        who is college educated and dedicated to desciphering information (by my own standard), I'm conflicted on whether information is harder to descipher from fact or
                        fiction, or if I used to be more susceptible to misinformation. I'm not sure. I will say misinformation feels more divisive than ever. The fact that the world's 
                        wealthiest individuals officially control our main media platforms brings be fear that fully transparent information won't exist. If the ceo of google has 
                        governmental power, who is to stop them from shaping search results? I feel like this is such an obvious argument and an obvious threat to our democracy, but I 
                        am going to talk about it anyway. I think that is why my generation felt so comfortable with tiktok. There is a sense of vulnerability with American owned social 
                        media apps. Something inexplainable but untrusting. I will say, now more than ever, question everything you read. Question your algorithm, question the point of 
                        every post, who it may be benefiting, and who is the source. There is power in community and that is what I will take forward with me.
                    </p>
                    <div style={{ 
                        fontSize: '12px', 
                        color: '#FFB6C1',
                        fontStyle: 'italic'
                    }}>
                        Posted on January 22, 2025 • 4 min read ✨
                    </div>
                </div>
            
                {/* Trump Inauguration Blog Post */}
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
                    It's an odd time to be alive in America. Some of my side passions include diving deep into history and politics. Today, the day after Trump's inauguration, I find myself overwhelmed, helpless, and fearful that history might repeat itself once again. From my perspective, this presidencial election reflects some of the darkest corners of our history and culture. What do all terrifying genocides and extremist movements have in common? Fearmongering. Demonizing a group of people inevitably raises tensions.
                    At 25, I've developed an appreciation for patterns, both historical and mathematical, and I can't help but see parallels between now and many troubling times in history. I still vividly remember the hope Obama inspired in me as an 8-year-old. He wasn't just a politician. He was a symbol of something bigger. But back then, I didn't know a single policy. Words like "Democrat" or "Republican" were abstract concepts to me. All I knew was the raw emotion he evoked.
                    Now, as an adult, I find myself less swayed by emotion and more interested in plans, policies, and solutions. Yet, I'm watching an entire wave of people overtaken by the same intensity of emotion I once felt as a child. It's unsettling. The Democratic Party, in my view, hasn't inspired the kind of hope I once felt. And many on the other side are gripped by fear. A fear stoked by misinformation and sensationalism.
                    I still remember dating someone who supported Trump in 2016. They'd parrot claims like, "Democrats are aborting babies after they're born!"—a narrative echoed by prominent media outlets. That was the first time I truly worried about the direction our country was headed. Historically, when fascist regimes rise, they thrive on a steady diet of misinformation. They create an environment where citizens question reality itself, leaving people unable to trust any source of information.
                    Today, I feel that struggle more than ever. I try to be critical of the media I consume, but finding credible information feels more and more difficult. Everything feels extreme. Distrust in government, combined with the erosion of a shared reality, makes this era feel uniquely fragile.
                    I believe several factors have shaped this moment: the pandemic, global inflation, the rise of divisive social media algorithms, redpill and blackpill content, and a culture of demonization. Many of these forces feed into each other, creating a feedback loop of division and radicalization.
                    To anyone reading this who supports Trump: I welcome discussion. One of the few certainties I hold is that there's always more to learn. My opinions here are only opinions. I'm an American citizen passionate about the future of this country, not an authority on politics or history.
                    But I can't shake the fear that the country is at a crossroads. Maybe it's the rawness of the election aftermath, but it feels like we're standing on the edge of something big. I worry for my friends who were brought to this country as children, for the middle and lower classes, for the erosion of women's rights, for the growing class divide,and for the emboldenment of extremists.
                    This election doesn't just feel dystopian—it feels dark. It feels like there are two paths ahead: either citizens will revolt once corruption invades every corner of their lives, or things will continue to deteriorate until a breaking point is reached. Based on patterns I've seen in history, the end of a great nation feels near. Of course, there's a great chance I'm completely wrong... I hope I am.
                    </p>
                    <div style={{ 
                        fontSize: '12px', 
                        color: '#FFB6C1',
                        fontStyle: 'italic'
                    }}>
                        Posted on January 21, 2025 • 5 min read ✨
                    </div>
                </div>

                {/* Making this website Blog Post */}
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
                        Building this website has taught me an invaluable lesson about the importance of pre-planning. Over the past few months, I've been diving into 3D graphics and creating immersive experiences. It's been thrilling. Maybe a little too thrilling. A recurring theme in my projects is that I get so excited about an idea that I dive in headfirst without a clear plan. While this excitement fuels my creativity, it often comes at a cost: projects take twice as long to complete because I end up backtracking and reworking parts I didn't think through.
                        This has been a hard but valuable lesson to learn. I've always loved the artistic process, whether it's digital art, sewing, or working in Blender, but when it comes to programming, I lean heavily on functionality. And that's telling because functionality demands planning. The more projects I work on, and the more I study system design, the more I realize how much there is still to learn. But that's exactly what drew me to software development in the first place. The endless rabbit holes of knowledge keep me motivated, constantly moving the goalposts and giving me more control over how I bring ideas to life.
                        Ironically, those early missteps are often my greatest teachers. Still, I can't help but stress about time. I'm always hyperaware of the calendar, worried I'm wasting precious hours. Balancing technical growth with burnout, my endless stream of ideas with the reality of time management. These are challenges I'm actively working to overcome.
                        I've already taken steps to reclaim control of my time and energy. I deleted video games and set strict limits on social media use. Whenever I feel the urge to scroll, I pick up a book instead. I've also found that simply changing my environment, whether it's rearranging my workspace or taking a walk, helps me avoid burnout.
                        As much as I love learning and creating, I've come to realize the importance of balance. Losing my passion for creation would feel devastating, so I make sure to prioritize rest just as much as progress. Sleep, in particular, has been a game-changer. In college, I constantly sacrificed sleep, and while I survived, I now see how much I was limiting my potential. There's a night-and-day difference in how much I can learn and accomplish when I'm rested versus when I'm exhausted.
                        These lessons may seem obvious, even cliché, but they didn't truly click for me until I lived through them. Progress isn't just about grinding away, it's also about knowing when to pause, reflect, and recharge. Progress is about knowing when to take your time to do the boring part, planning. Accepting boredom is the best way
                        to pull out your creativity and complex solutions. Something about laying awake at night brings out the best of my work!
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