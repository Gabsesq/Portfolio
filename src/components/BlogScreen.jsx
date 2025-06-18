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
            position={[-.1, 10.8, -10]}
            rotation-x={0}
            rotation-y={0}
            rotation-z={0}
            distanceFactor={15}
            occlude
        >
            <div 
                style={{
                    width: '735px',
                    height: '440px',
                    background: '#1a1a1a',
                    padding: '20px',
                    fontFamily: 'Arial, sans-serif',
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: '10px'
                }}
            >
                <div 

                    ref={blogContainerRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflowY: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        padding: '20px',
                        boxSizing: 'border-box',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#0084FF #1a1a1a',
                        msOverflowStyle: '-ms-autohiding-scrollbar',
                        touchAction: 'pan-y',
                        transform: 'translateZ(0)',
                        height: '100%',
                        willChange: 'transform'
                    }}
                >
                    <div style={{
                        minHeight: '200%',
                        paddingBottom: '100px',
                        transform: 'translateZ(0)'
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
                            The Shoe Might Still and Sorta Used to Fit
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            This is going to be a seriously unserious blog post about a reality TV gal that seriously stirs emotions inside me. I am going to be talking about 
                            Huda from love island! Love island is one of my faves. Lets talk about it. I am going to admit, this is so bad, but I haven't even watched this season 
                            yet, and still the Huda clips I am seeing circling on social media are so impactful to me and I'm going to unpack this. I see a younger version of 
                            myself in Huda. I know the world is so upset with her, and I personally feel the second hand embarrassment of her actions, because her actions are so 
                            closely aligned with Gabby 1.0 (I'm in my Gabby 2.0 era). Huda lacks emotional regulation skills, Huda is the ultimate anxiously attached lover girl, 
                            she has a huge mouth on her. I feel like I'm watching my 21 year old Gabby 1.0 in horror every time I see a Huda clip. It actually triggers me and makes 
                            me cringe. And yet I understand her SO MUCH. Her inability to self reflect makes me love her and hate her. Her inability to read the room and to make others 
                            around her feel comfortable makes me sad for her. Her gullibility makes me yell at tiktok, a cluster of fricken pixels. I think a lot of us see true, raw, primal human flaws 
                            in Huda that we have in ourselves, and it makes this show so hard to watch. What I love about reality TV is that you put people in a regulated situation, 
                            turn up the heat, and watch them express the most extreme versions of themselves. This is sooooo embarrassing, and I definitely should keep this to myself, 
                            but reality TV has taught me so much about societal norms and how carrying yourself effects others. I grew up in an odd household, something I will probably 
                            never get into, but lets just say my growth was extremely stunted. From social skills to emotional regulation, I was a mess. Watching others get flamed for 
                            behaviors I would exhibit actually helped me understand how my interactions with others may have been either harmful, and why. Some behaviors I thought were normal, 
                            absolutely were NOT, and hearing groups collectively analyze and talk shit helped me get down to the WHY.
                            I've had the great honor and privilege (also pain and shame) of having certain people in my life express certain toxic behaviors that I had. At the ripe age 
                            of 25, it's been about 3 years since I've received a real brutal criticism sesh. My poor friends hear me beg for a yelp review on my personality, which is 
                            probably so annoying in itself but they give me the validation I need. I used to struggle so much with 
                            introspection that I had to BEG my friends to tell me I'm not an alien. And since no one will give me a true critique, I watch reality TV and try to align 
                            myself with everyone I see on TV. This is actually slightly embarrassing to admit lol but here we are, and why not! Huda, I'm so sorry to bring you into my 
                            mess, but just know I see you, I hear you, I wish the world wasn't so hard on you, and the harsh reality critiques really hurt me when I did receive them, and 
                            I just hope they don't hurt you the way they hurt me. I truly cannot imagine the mass hatred she is going to feel when she checks her phone for the first time. 
                            I had very close friends, at a time that I thought we were on amazing terms, every day I was thinking about how grateful I was to have them, hit me with a list of 
                            things they didn't like about me. BRUTAL. I am not someone that really struggles with depression, but I was the most hated in the villa, borderline voted off the island!
                            But it truly was a gift that changed my life. My therapist doesn't really agree and thought it was harsh (some of the critiques were straight up 
                            nitpicks, you know the stage in a relationship where you just start hating the way someone breathes?) But there were definitely some pieces of gold in there! 
                            I always tell my family that I have the gift of being a mirror for others, and I also have the curse of 
                            seeing a blurry reflection of myself. How have I moved past this? I've been 1,000% honest with my therapist. I go over almost every situation that I am a little 
                            bit anxious about, was I too mean? Was I too nice? Does this come across as aggressive? And he helps me break down perception from reality, basic DBT, a skill 
                            most people learn through their childhood. I feel like I'm breaching Gabby 3.0 territory, but I still lack a little, so until I 
                            can get past some of my bugs, no new patches. Anyways, to wrap this up, don't be too hard on yourself. And if you need an ear, if you need the honest truth from my 
                            perspective in a ~hopefully~ painless way, I am here for you & my contact box is open. Huda, please message me :,(
                             </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on June 17, 2025 • 3 min read ✨
                            </div>
                        </div>






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
                            Piece and Peace
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            Always been a lover girl, since I was 13 sifting through Omegle, a loveless land! I loved my first kiss, my first best friend, my first, second, third boyfriends and countless besties. I would 
                            package my own puzzle pieces into a glass box and give it to anyone who would take the free gift. Some of these people gently handled the glass puzzle box, some cared for the glass right before 
                            they discarded the complex parts of the puzzle, and some scattered the puzzle pieces in the garbage and asked me to step in the glass. I have remanufactured the box into different materials with 
                            puzzle pieces of the 
                            people that I love, loved, and lost. Every person on this planet I have ever met has some 
                            intricate piece that I have never seen before. It may not have fit into my puzzle, and I tried to force it to, but misfit pieces just don't make sense to add. But I gathered the pieces 
                            people left behind, some good, some bad, many medium, and I added them to my puzzle box. S taught me to harness more empathy, J taught me how far a wholesome laugh can reign a room, L taught me how 
                            to detach when necessary, M taught me how to live in my truth, C taught me how to be a better friend, S taught me how to handle the weight of the world with grace, another S taught 
                            me how to be more curious and interesting, N taught me how to live my life every day, J taught me how to make laughter out of thin air, A taught me how to carry light-hearted energy, L taught 
                            me how to be authentic, K taught me how to truly practice self-care, G taught me how to stand up for myself, P taught me how to be a good listener, M taught me not to care about dumb Sh, 
                            E taught me how to be selfless, M taught me to light up a room, G taught me how to let go, G taught me to work hard, C taught me how to be a good family member, G taught me how to get 
                            over it, B taught me how to get excited over little things, K taught me how to chill out, J taught me how to aura farm lol, T taught me patience, C taught me that not everyone has good intentions, 
                            A taught me how feel pain from laughing so much, B taught me to walk away from a situation, K taught me true friendship, Z taught me how to light up a room, Some lady at the bar taught me 
                            how to love a stranger, I could 
                            go on forever. Half of these people are still in my life. The other half live in my memory.
                            Many taught me how to walk away when the time came, a skill I didn't acquire until the world demanded it. Every person I have ever loved, I will always love, because 
                            they all had characteristics that I loved in some form, and I carry those traits with me in my cardboard beat up puzzle box. I am the custom puzzle woven with my admiration 
                            for others, and anyone who has been immersed in my life is a part of my f'ed up little puzzle </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on June 5th, 2025 • 2 in read ✨
                            </div>
                        </div>





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
                            Ego and passion
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            Social media drives ego and drains passion. When I was younger, ego was the driving factor behind all of my decisions. Why is ego dangerous and how is it correlated with motivation?
                            The capitalistic cog devoured my brain from a young age. When I was 12, I bought an ipad. Unrestricted internet access at the age of 12 stunted my creativity and instead fed visions 
                            of what a "proper" life looked like. Any money I made went into clothes, accessories, meaningless plastic, all to uphold a persona that did not reflect my true desires, but my 
                            timeline manufactured opinions. Any burnout I experienced was rooted in being led by ego. How can you decipher between ego and passion? Are external forces, opinions, and pressures 
                            the force behind your actions and life style? Or are you inspired to make a difference? Are you focused on the goal, or on the actual daily actionable items? Are you driven by the grade 
                            you receive in the class, or by the learnings and how they fuel your personal growth? Unfortunately, for a long time, I was driven by the end goal, the ego. ~Unfortunately~ for me, I 
                            grew up in straight up survival mode. With the fight or flight of a caveman evading a pack of wolves and a lion, I found so much success. The constant anxiety drove me to become a 
                            grade A student, college athlete, materialistic, picture posting, 6 pack having image of perfection. I say this as someone who has lived through a crippling 'flop era' that was tied to 
                            my ego. My body had anxiet-ied so hard that I accidentally achieved my perceived goals. Once I lost everything in my flop era, I was left with a choice. I could go back to waking up into an 
                            anxiety attack every day over whether or not I would "make it", OR I could say... I'm working with a clean slate. I have nothing to lose. No image to uphold. No people to please. My 
                            country has been on the decline into fascism. The job market is... my peers know. Food prices are inflated. Housing is a nightmare. I have the privilege of having a family that backs 
                            me no matter what path I choose. I think that a lot of the ego driving my generation is a result of the fall of capitalism, and how we have to romanticize owning once borderline guaranteed assets. 
                            Starting from a point of passion, I am extremely inclined to start my own business. I have been working on making some designs. I have been learning about marketing, looking into CAD 
                            artists, manufacturing costs, and I feel like the best thing I can do is just jump in. I have made some 3d printed prototypes of my designs, and I think I can mainstream a major field 
                            if I can market it correctly. This is something that, when I was driven by ego, I would have been too scared to fail. I would have went back to school to be a lawyer, or tried to 
                            advance in the tech field. But I am still at the point that I have nothing to lose, and it is so empowering! I am Black Mirror episode Nosedive, end credits, and I cannot explain how 
                            exhilarating it feels to not give a! My life, my actions, my weekends and weeknights feel like belting "I have nothing" by Whitney Houston and the girls that get it get it! 
                            I've formed deeper relationships and attracted amazing people. I wake up with purpose fueled by this end goal without the pressure of family members, 
                            profits, etc. I will say, I do think my generation dreams of starting businesses because it seems to be the only way to break through the societal monetary hierarchy. When these businesses are 
                            driven by profit margins, by ego, I truly think higher powers will eventually intervene. My main focus, what I have always wanted deep down, is to improve lives and I'm so excited to 
                            share my ideas in the future and hopefully make a life changing pivot. The beautiful part about letting go of ego is that if I fail, I have so many ideas that I will keep trying. 
                            I'm officially retired from societal expectations, and ~10/10~ every hardship and trial has only turned me into the more elevated version of the person I have etched myself to be.
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on May 20th, 2025 • 3 min read ✨
                            </div>
                        </div>





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
                            Yearly Goal Check In
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            I wanted to take a moment to reflect on the intentions I set for 2025 and how things are going so far. It's been a mix of progress, reflection, 
                            and ongoing work. Honestly, I'm proud of that. One of my biggest goals this year has been committing to a dopamine detox. I've written 
                            about this before, and while it's going fairly well, it's still one of the most difficult things I've taken on. I catch myself constantly 
                            craving videos while I work, music in the shower, scrolling between tasks. I know I'm not alone. I wonder how many others from 
                            my generation feel that same urge to fill the silence just to avoid being alone with our thoughts.
                            I've realized I have an addictive personality, and this detox has forced me to confront that. It's challenged the way I self-soothe and the way 
                            I seek distraction. But that challenge has been valuable.
                            Another focus of mine this year has been my ability to articulate myself, especially verbally. I grew up timid, hesitant to speak, always 
                            afraid of saying the wrong thing. That carried into adulthood. But now, I'm lucky to work for a women-owned company with leaders who push me 
                            in the best ways. They've helped me find my voice, encouraging me to share my ideas and reminding me that I do have something valuable to say. 
                            Their support has genuinely improved my self-image, and I'm slowly rebuilding confidence when I speak. It's a process, but I feel the shift happening.
                            Language has been a huge part of this personal growth journey too. I've been practicing Spanish daily, and I can finally say I feel fluent. My 
                            vocabulary might not be perfect, but I can hold conversations about almost anything, and that's a milestone I'm really proud of.
                            One of my daily goals this year has been simple: live more. And I've been doing just that. I've joined sports leagues, political groups, and started 
                            dancing salsa, bachata, norteñas, cumbia. I've launched websites, explored new hobbies, and made it a priority to have fun again. The friendships 
                            I've formed lately feel so genuine and fulfilling. For the first time in a long time, I feel truly connected.
                            Romantically, I've started attracting people who are kind, intelligent, emotionally available, and fun! Men who mirror the energy I've been working 
                            to cultivate in myself. That said, I'm still navigating my avoidant attachment style and learning to improve how I communicate. Texting and social 
                            media aren't always my strong suits, but in-person, I've felt real, grounded connections.
                            Physically, I feel more at peace in my body. My skin is glowing again, my health is stable, and I've stopped obsessing over every detail of how I 
                            look. I've let go of punishing routines and started honoring how I feel instead.
                            One of the most important shifts I've made is around boundaries. I've learned to distance myself from people who don't have my best interest at 
                            heart. This hasn't been easy. Sometimes I question myself. Am I being avoidant, or am I honoring my growth? I try to lean on my intuition and my 
                            therapist instead of looking for validation from others. It's still a learning curve, but I'm getting better at trusting myself.
                            To anyone out there working on their goals this year,I hope you're seeing traction, too. Progress isn't always linear, but every step forward counts.
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on April 30th, 2025 • 6 min read ✨
                            </div>
                        </div>







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
                            Break Down to Break Through
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            There's power in being honest. And for a long time, I wasn't.
                            Between 2021 and 2022, my life unraveled. At the time, I looked like I had it all together. College athlete, straight-A student, abs, 
                            boyfriend, solid friend group. Underneath the surface, though, I was cracking. I was fueled by egotistical beliefs and lack of self-esteem.
                            I was in a deeply toxic relationship. By the end, I had absorbed that toxicity, too. I was cheated on, manipulated, and guilted into staying. 
                            And when I finally left, my ex put real effort into humiliating me online and finding ways to hurt me from a distance. By this point, I had turned 
                            into someone evil, unrecognizable, and terrible.Right before we split, 
                            we were robbed at gunpoint. At the same time, my family life was in chaos. One relative was in and out of psychiatric care. Another was in jail. 
                            I was trying to keep their world from falling apart. Driving their kids around, attending attorney meetings, patching up marriages. 
                            I was emotionally maxed out, but I buried it all just to survive.
                            Isolation hit hard. I lost friendships. I lost energy. I lost myself.
                            That's when my body started tapping out. I developed full-blown autoimmune symptoms. I couldn't get out of bed without feeling like 
                            I'd run a marathon. I broke out in hives. My joints were so swollen I could barely move. I was barely eating, but sure was gaining weight. I 
                            began failing my classes for the first time in my life. I wasn't depressed in the traditional sense. I was depleted. My body was screaming
                             what I refused to say out loud: I couldn't keep going like this. I physically could not get out of bed...
                            Stress broke me. Literally. And I'll never downplay its power again. It can destroy your health, your mind, and your spirit.
                            But here's the beautiful part! I rebuilt. Slowly. Painfully. And completely.
                            I learned that I had no boundaries, and I paid the price for it. I learned that being a people-pleaser doesn't make you kind, it
                             makes you easy to exploit. I had been ignoring my own needs to chase success, to meet impossible standards, to prove my worth. That 
                             life broke me open and it made room for something better.
                            Today, I'm a different person.
                            I eat for nourishment, not aesthetics. I prioritize sun, movement, and rest. I no longer attract people who prey on low self-esteem, 
                            because I'm not that person anymore. The men and friends who are attracted to me are kind and good. Even better~~ I am finally turned OFF by terrible 
                            behavior instead of leeching on to the addictive ups and downs. I've worked hard to stabilize my health and bring my body back to a baseline. A body that doesn't 
                            live in constant fight or flight.
                            I've also had to face hard truths about myself. I picked up unhealthy behaviors during that relationship. My jealousy turned outward. I let my own 
                            insecurities project onto other women. That's hard to admit, especially because I'm so passionate about women's rights. But I've learned how trauma 
                            rewires us. I've also learned how to rewire back.
                            Emotional intelligence didn't come naturally to me, but I've worked and am working on it. I used to be obsessed with money and image. Now, I'm obsessed with peace. 
                            I'm surrounded by the right people, I enjoy my work, and I find meaning in the small things.
                            This chapter of my life taught me everything I needed to learn and then some. I'm still healing. Still unlearning. But I'm proud of how far I've come.
                            If you're going through something that feels like the end of your world, I promise, it's also the beginning of a new one. 
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on April 8th, 2025 • 6 min read ✨
                            </div>
                        </div>




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
                            Building Community
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            Hello! I'm going to talk about some actionable steps to build community. I am also opening this up to advice and if I receive anything significant, I will add it to this post.
                            If you have any comments, please leave them in my contact form. There is no better time to acquire the skill of discernment and discretion, especially when it comes to media.
                            It is so important to have a community that you can rely on. When I say rely on, I also mean a community that fosters open dialogue, proper sources (scientific, educational,
                            medical, not opinion based). A community that allows questioning and group reliance is the goal for 2025, at least for me. I joined a group that meets weekly to discuss goals
                            and actionable items toward change. Something I want to bring up is a community garden, or even purchasing a cow with some of the people from my group. The further we can stray from
                            corporation owned groceries, the more reliable our food source will be, and the quicker coorporations will be forced to apply affordable prices. For now, we are shopping locally
                            but more self reliance may also be a good idea. I am also learning how to properly organize. Another way to contribute to community is to protect everyone in the community, whether
                            or not they are someone you like or know. Allowing injustice toward one allows injustice toward all. Becoming creative in your protest, remaining peaceful and also productive, is
                            what creates change. Remind people of their rights. Learn trends and learn how to use them to your advantage, especially financial. Here is where it gets tricky: cult culture.
                            Having a diverse media diet and potentially multiple communities with different values will help deter cult culture. If you are caught in an echo chamber, it is challenging to
                            avoid radicalization and further understanding of the world. It is important to understand multiple perspectives to an argument or viewpoint in order to decipher which side is backed
                            by logic and evidence, or at least which viewpoint makes more sense as a whole. Would I listen to a tattoo artist about the economy? Probably not. Finding a variety of economists to
                            follow, variety in news sources, variety in social workers, and variety in artists is the best way to appreciate the full picture. Community wise, I found a group of women in Colorado
                            who are focused on actionable items and concise messaging and directions toward news sources. We are organized, we participate in touchy conversations, and we are focused on continuously
                            learning and digesting patterns. Some places where I recommend looking for community meetups are: facebook groups, meetup.com, eventbrite, local newspapers, tiktok and other social media,
                            discord communities, local restaurants that offer community events, government websites. Please contact me on this website if I am missing anything! Some means in which I am
                            preparing for our future world include~~ food supply, defense items, an indoor hydroponic garden, books on edible plants, buying seeds, buying a book of maps, and water filtration straws.
                            This seems dramatic, but I am a lover of history and this only feels appropriate with the uncertainty of the direction of the United States.
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on March 20th, 2025 • 6 min read ✨
                            </div>
                        </div>




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
                            Relationship Dynamics
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            I would like to talk about relationship dynamics in the gen z community. I have been in two long term relationships, and I have had a few short term relationships. I have experienced
                            unrequited love, and I have experienced love, and I've been on the receiving end of unreciprocated love. I am going to be speaking from my own flaws and the flaws I've noticed in others. I don't want to be a broken record, but social media is the issue.
                            I'm not sure if it is the issue in friendships, but definitely in relationships. I think that our grandparents had 'access' aka came across very attractive people, maybe a handful of
                            times in their life. They were usually secluded to their local communities, and didn't have as much access to travel. How many beautiful people do we see daily on social media? Hundreds,
                            if not thousands. We have a creepy amount of access to beautiful people for the first time in history. My dating profiles within days have thousands of potential matches. This is not
                            healthy. The constant swiping and swapping dehumanizes us to the fact that every person is unique, and chemistry can be challenging to find. Once you lose someone, you will never find
                            them in someone else, and you may never find it in the same person either as people are also constantly evolving. We are so accustomed to 9 second dopamine hit videos that we have lost
                            the ability to connect with people. We are dopamine overloaded, so guaranteed mundane tasks are less appealing. I had a short addiction with video games, where they were all I would
                            think about. I would play for 14 hours a day into 4 AM. I had no interest in socializing, doing laundry, or really anything. I notice this in a lot of my peers. Not only are our dopamine
                            receptors fried, but when we spend so much time missing life and community, we become awkward and anxious. I say we, but this is what happened to me and I've seen it with a few friends
                            as well. This is the first generation to face this battle. Previous generations were thrust into social spaces becuase there was nothing else to do. Now, to achieve the true human
                            experience, we have to intentionally seek out community and carve out the outside noise. '80/20' incel culture terms are an oversimplification of relationship dynamics, but I believe
                            this term has a bit of truth to it. Men and women alike are so used to having a false sense of options, and a false sense of abundance of beautiful people, they often look for the full
                            100% connection. This is extremely unrealistic. When I was younger, I dated someone who I found very attractive and we had a good connection, but they did not respect me or my boundaries.
                            At that point in my life I valued physical attraction, fun, intensity. At this point in my life, I value someone with similar
                            morals, respect, a personal connection, and overall a feeling of safety. Obviously I still would date someone I'm attracted to, but taking a step back and allowing connections to grow
                            outside of limerance, chasing, addiction, toxicity, I have met some of the best people I have ever met. I truly feel a caring, safe love that I've never felt and I'm not sure I could have
                            achieved this without resetting my dopamine receptors, circling back to my personal values, and being open to dating people I wouldn't have dated in the past. Lets all reset our dopamine
                            receptors, evaluate what is a preference and what is a requirement, and let's start humanizing people again!
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on March 3rd, 2025 • 6 min read ✨
                            </div>
                        </div>
                                            
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
                                Gender Wars
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            I just watched the 4 part series adolecense on netflix. I really want to talk about the radicalization of young men and young women alike. I say young, but it is older people
                            who are pioneering this behavior as well. I loved this mini series because it did not pin the blame on one singular aspect of society, but it shed light on how we collectively
                            play a role in raising our youth and shaping the future of society. Some areas in which the this series shed light in my opinion: School teachers seemed over extended and
                            desensitized to the radical behavior of their students. The father seemed to struggle with emotional regulation and the mother seemed to stuggle with asserting herself and soothing
                            her husband's outbursts. I will say, the outbursts were subtle but this was purposeful. This was meant to represent a normal family. Social media wise, the child was dabbling
                            in explicit and harmful content that is not meant to be seen by children- or even adults in my opinion. There was also an aspect of dogpiling by peers and social media on the protagonist.
                            There was a slight mention of 80/20, a famous incel sentiment that 80% of women want 20% of men. This is pushed by 'red-pillers' like Jordan Peterson, Andrew Tate, and others.
                            We are in an odd time in history because women have always been subjugated to men throughout history. This is the first time in history that women are allowed their own means to
                            survive. This creates a different relationship dynamic between men and women. Where before we needed a provider (due to our lack of rights to work, own land, own credit cards, etc),
                            now as women we require something a lot different. I can only speak for myself, but I require an equal companion. I think the biggest requirements for a relationship for me, a
                            'zillenial', are emotional intelligence, good communication, and equal respect. I truly think that men and young men were never taught these three skills because mysogny and
                            patriarchal views are so engrained in our world. I think I offer a unique perspective given my hobbies and life path. I grew up playing golf, a notoriously male dominated sport.
                            I received many low EQ comments from a lot of men, such as "You shot a 78? You mean on 9 holes?" or "You should be playing from the front tee, you're a girl", or unsolicited advice
                            from golfers that are very obviously less experienced than me in the sport. I also joined a computer science program. I had been coding a few years prior so I had a bit of background
                            knowledge. I will name a few examples out of the many: I had a classmate ask me if I had an onlyfans, aka an explicit video sharing platform. I did not know this person. I had
                            someone say "no offense, but I wouldn't trust you to help with this project" on the first day of class. Him and his group of friends ended up requiring my helo for every assignment
                            throughout that semester. I had a teacher who was very condescending and rude only to the women. I fear that these are a few examples that may demonstrate the larger picture,
                            hopefully. Being looked down upon because of my gender is something I have experienced throughout my life, and I'm not sure how to tackle that head on. How does the programming of
                            a woman being lesser than begin? I think it's important to be open to discussing the differences between men and women, but there are way too many misconceptions about what a
                            woman can and cannot do in comparison to men. Behind a lot, if not most famous inventors and pioneers throughout history, there was a woman behind them doing a majority of the
                            intellectual work. Dolores Huerta, Doctor Rosoland Franklin, Gabrielle Collette, and many more women throughout history were not given the credit for their discoveries or inventions,
                            but instead their work was stolen or taken credit by their husbands. The Matilda effect is the term you should search if you would like to learn more about the forgotten women
                            throughout history. This is where I am conflicted on how to move forward as a society. There is a growing sect of society who would like to make education less accessible to women
                            and see women as mothers only. This is very limiting, and personally makes me feel a bit claustrophobic just thinking about it. At the same time, there are many women who do want
                            to dedicate their lives to being mother and family figures, and I want society to have space for them as well. I don't think it needs to be one or the other, and I'm unsure why
                            there can't be room for both. I guess where I'm going with this is that mysogny is a very doubly edged sword. Let me add, I believe many and if not most women also hold mysognistic
                            views which does not help this situation. How do we humanize women? How do we dismantle harmful retoric that inadvertantly hurts both men and women in the long run?
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on February 24, 2025 • 6 min read ✨
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
                                Trump Inauguration
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
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
                                color: '#0084FF',
                                fontStyle: 'italic'
                            }}>
                                Posted on January 21, 2025 • 5 min read ✨
                            </div>
                        </div>

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
            </div>
        </Html>
    );
} 