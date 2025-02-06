import { Html } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";

export default function BlogScreen() {
    const blogContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        // Check if device is mobile
        setIsMobile(window.innerWidth < 768);
        
        if (blogContainerRef.current) {
            blogContainerRef.current.scrollTop = 0;
        }

        // Handle touch events for mobile scrolling
        const handleTouchStart = (e) => {
            setStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e) => {
            e.preventDefault();
            const deltaY = startY - e.touches[0].clientY;
            const container = e.currentTarget;
            container.scrollTop = scrollTop + deltaY;
            setScrollTop(container.scrollTop);
        };

        const container = blogContainerRef.current;
        if (container && isMobile) {
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
            
            return () => {
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, [isMobile, startY, scrollTop]);

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
            <div 
                ref={blogContainerRef}
                style={{
                    width: '735px',
                    height: '440px',
                    background: '#1a1a1a',
                    padding: '20px',
                    borderRadius: '20px',
                    fontFamily: 'Arial, sans-serif',
                    color: '#ffffff',
                    overflow: 'auto',
                    fontSize: '14px',
                    boxShadow: 'inset 0 0 20px rgba(0, 132, 255, 0.3)',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#0084FF #1a1a1a',
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: '-ms-autohiding-scrollbar',
                    touchAction: 'pan-y',
                    position: 'relative',
                    overscrollBehavior: 'contain'
                }}>
                <div style={{
                    minHeight: '1200px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                    position: 'relative'
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
                            color: '#0084FF',
                            textShadow: '2px 2px 4px rgba(0, 132, 255, 0.2)'
                        }}>
                            ✨ My Blog ✨
                        </h2>
                    </div>
                    {/* Blog Posts */}
                    <div style={{
                        background: '#2a2a2a',
                        padding: '20px',
                        borderRadius: '12px',
                        marginBottom: '15px',
                        boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                        border: '1px solid #3a3a3a'
                    }}>
                        <h3 style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '20px',
                            color: '#0084FF'
                        }}>
                            Dopamine Overload
                        </h3>
                        <p style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '14px', 
                            color: '#ffffff',
                            lineHeight: '1.6'
                        }}>
                          2019, I refused to download tiktok after my cousins begged. I did not have a PC. I had a very old iphone, a laptop for programming, and a tablet for digital art. 
                          I remember downloading tiktok in 2021, a life altering decision, honestly. I felt disconnected from the world and I will say, tiktok helped me feel some normalcy 
                          and connection, even after the 'end' of covid. But reflecting on who I am now, and who I was in 2020, I have excelled in some areas and declined in others. New 
                          technology has been my wake up call that I am someone who gets addicted to dopamine hits, and it's time to take back control of my life. I need constant stimulation, 
                          work and TV show at the same time with a coconut water (my healthy binge). I have noticed how much harder it is to do mundane tasks like laundry, dishes, cleaning, 
                          general motivation and survival. Dopamine is meant for human survival to have the will to survive, but I have been over-doing it, along with the rest of the world. 
                          Why am I overstimulated around a group of people, but I'm understimulated whenever I'm alone? I fall asleep to podcasts, I am addicted to learning, addicted to 
                          the current state of our world, and fortunately a bit addicted to coding (my personal favorite addiction that I don't intend on quitting). As a software developer, 
                          I have a sense of guilt and a sense of duty to avoid making addictive software. At the same time, that is usually the end goal. I am conflicted, but I am making an 
                          intentional effort to take back control of my life and regain some will power. So far, I deleted tiktok which is unavailable to download on my phone. I still use it, 
                          but I use it a lot less because of the small added steps to access the app which has been a big help in itself. I also deleted valorant. I've been going to social 
                          meetups and meeting amazing people. I joined a kickboxing gym. I drive to work without music sometimes. I try to wake up without checking my phone.I have been reading and 
                          studying Spanish when I feel the urge to check social media. Unfortunately, I have forgotten the art of relaxation, and I am working on that. How to be 100% bored and 
                          unoccupied is a lost art. The art of processing emotions and sitting alone with your thoughts is a rarity and I intend on bringing it back. I truly think our brains 
                          are not wired to consume this much stimuli, so I am plunging forward but also into my old life- a life of discipline, energy, and healthy productivity. I will say that I love 
                          trends and inside jokes, which I will miss, but maybe I can settle for a spark notes instead!
                        </p>
                        <div style={{ 
                            fontSize: '12px', 
                            color: '#0084FF',
                            fontStyle: 'italic'
                        }}>
                            Posted on February 3rd, 2025 • 4 min read ✨
                        </div>
                    </div>
                    {/* Blog Posts */}
                    <div style={{
                        background: '#2a2a2a',
                        padding: '20px',
                        borderRadius: '12px',
                        marginBottom: '15px',
                        boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                        border: '1px solid #3a3a3a'
                    }}>
                        <h3 style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '20px',
                            color: '#0084FF'
                        }}>
                            Creative Calling
                        </h3>
                        <p style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '14px', 
                            color: '#ffffff',
                            lineHeight: '1.6'
                        }}>
                            Reflecting on current society and the way forward, I've come to the conclusion that building community and fostering creativity is the best way to stay afloat, stay alive, and stay content.
                            I've always been drawn to creative endeavors, but my family has always pushed me toward stem. I picked computer science because of the creative path that the field promised. In a sense, I 
                            don't regret it because of how much I have learned and been able to create. At the same time, I did intend on making a good living for myself and my family. Now, I feel like those that will 
                            thrive are those that are creative. Building community, interpersonal communication, and creativity are the new stem. This is a hard pill to swallow as STEM has been indoctrinated into 
                            almost every high school student, the ticket to the middle class. Unfortunately with Automation and technological advances, a lot of these jobs will be slashed (from my predictions and what 
                            I've seen so far). A 70 inch tv used to be the status symbol, the new status symbol is a handmade yellow couch one of a kind. I'm not sure if this is a postiive or negative for society, but 
                            I do know I am sort of excited to be a part of it. I feel like now is the time to foster my creativity through sewing, coding, and creating in general. I have a few inspirations that I've 
                            looked up to for years but I've been scared to make the jump. My biggest flaw is that I want to do everything, I want to create everything, and this gives me major time anxiety. I want to 
                            talk a little bit more about community and how community is also the new path forward. I feel like Tiktok was so powerful because it opened doors for community and discussion. This seems like 
                            a given, but please remember I am gen z. I lived some of my formative years through a global pandemic scrolling on a phone. I feel that our government is no longer and has not been for a long 
                            time feeding back into it's citizens. With that, having a group of local support will mean everything going into the future. I don't want to talk about any doomsday events quite yet, but I 
                            am very nervous for the state of the US. Having others to rely on could very well be a way to survive. Here's a less extreme example: My grandparents have lived in our home for over 30 years. 
                            They know the entire neighborhood and they all rely on each other. Gossip keeps us aware, like nextdoorneighbor.com but in real life. This is a survival mechanism, and I'm starting to 
                            understand older generations more and more. Every human on this planet is succeptible to large scale change, and the best safeguard is community. If I do start my creative endeavors, aka 
                            business, I will make sure to do it responsibly and use that platform to inspire community. I have a few ideas in mind, and I will be sure to share them with you all. Thank you for reading!
                        </p>
                        <div style={{ 
                            fontSize: '12px', 
                            color: '#0084FF',
                            fontStyle: 'italic'
                        }}>
                            Posted on January 29, 2025 • 4 min read ✨
                        </div>
                    </div>
                    {/* Blog Posts */}
                    <div style={{
                        background: '#2a2a2a',
                        padding: '20px',
                        borderRadius: '12px',
                        marginBottom: '15px',
                        boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                        border: '1px solid #3a3a3a'
                    }}>
                        <h3 style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '20px',
                            color: '#0084FF'
                        }}>
                            Future with Automation
                        </h3>
                        <p style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '14px', 
                            color: '#ffffff',
                            lineHeight: '1.6'
                        }}>
                            There is a lot of excitement surround automation and AI right now. Personally, I am gatekeeping the softwares I have found as a new grad and someone who would love 
                            to have a job! Being a software developer as a living is all I have ever wanted, but with the current state of tech, everything seems a little bit up in the air. It 
                            scares me and inspires me at the same time. I also feel like I'm in an American bubble that celebrates capitalism, but almost is built against innovation in my opinion.
                            When we look at China's open source deepseek, I can only think that China is having this kind of success because they fund those willing to take a risk. I feel like the United 
                            States stunts it's own growth by funding the wrong people, aka large corporations. These large corporations and established software companies accept subsidies while 
                            making little to no progress or innovation. This is just my interpretation as someone who is not completely educated on the relationship between government, subsisidies,
                             tax credits, etc. I feel that our top company owners are comfortable - as the richest people in the world. I see Elon Musk focus on the space sector, contemplating making 
                             a difference on Mars, while China is focused on inspiring earth. In a career aspect, I have always wanted to work for pinterest or another ethical software company while 
                             creating my own business or at least independent applications on the side. Now, it feels like business owners are the group that will survive this age of automation. 
                             Right now I'm reading a book, "Futureproof 9 Rules for surviving the Age of AI" by Kevin Roose. One of his realizations was eye opening to me - Roose believes that the 
                             industrial revolution was such a large jump in technology that it was able to create jobs. While the industrial revolution rid of millions of jobs, it created even more 
                             jobs than it destroyed. In our generation, we have not made a significant jump in technology to this level. While we have improved, we aren't opening more sectors. 
                             Instead, we see a lot of pop up businesses automating mundane human jobs. When you think about it, if you get rid of someone's mundane work, you're leaving them with 
                             room for more productivity. Lets look at software, with AI and various tools that ~I am gatekeeping~~, if a software developer is 800x more productive, then you need 
                             800x less software developers. I think software developers are feeling the brunt of this, but there is an attempt to automate many fields we have relied on for the last 
                             100+ years without creating more jobs. What future does this leave for the average American? The average person on this planet? Thank you for reading, check out the book 
                             I mentioned above as it has a lot of great insights!
                        </p>
                        <div style={{ 
                            fontSize: '12px', 
                            color: '#0084FF',
                            fontStyle: 'italic'
                        }}>
                            Posted on January 28, 2025 • 4 min read ✨
                        </div>
                    </div>
                    {/* Blog Posts */}
                    <div style={{
                        background: '#2a2a2a',
                        padding: '20px',
                        borderRadius: '12px',
                        marginBottom: '15px',
                        boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                        border: '1px solid #3a3a3a'
                    }}>
                        <h3 style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '20px',
                            color: '#0084FF'
                        }}>
                            Misinformation
                        </h3>
                        <p style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '14px', 
                            color: '#ffffff',
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
                            color: '#0084FF',
                            fontStyle: 'italic'
                        }}>
                            Posted on January 22, 2025 • 4 min read ✨
                        </div>
                    </div>
                
                    {/* Temporarily Hidden Trump Inauguration Blog Post 
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
                    */}

                    {/* Making this website Blog Post */}
                    <div style={{
                        background: '#2a2a2a',
                        padding: '20px',
                        borderRadius: '12px',
                        marginBottom: '15px',
                        boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                        border: '1px solid #3a3a3a'
                    }}>
                        <h3 style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '20px',
                            color: '#0084FF'
                        }}>
                            Making this website
                        </h3>
                        <p style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '14px', 
                            color: '#ffffff',
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
                            color: '#0084FF',
                            fontStyle: 'italic'
                        }}>
                            Posted on January 1, 2025 • 3 min read ✨
                        </div>
                    </div>
                </div>
            </div>
        </Html>
    );
} 