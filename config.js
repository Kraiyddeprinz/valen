// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Sayanggggggg",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Awak sayangg saya takkk?> :>>",                                    // First interaction
            yesBtn: "SUKAAAA",                                             // Text for "Yes" button
            noBtn: "Nak tekan tak ke :<",                                               // Text for "No" button
            secretAnswer: "SAYANGGG SANGATT SANGATTTT ❤️"           // Secret hover message
        },
        second: {
            text: "yekee sukaaa, berapa banyakk?> :>",                          // For the love meter
            startText: "Banyakk...",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you marry me, eh, Will you be my Valentine sayangg?? 🌹", // The big question!
            yesBtn: "NAKKKKK",                                             // Text for "Yes" button
            noBtn: "Tanakla wek"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WAAAA BANYAKKNYAAA YEYEYEYEYEYEYYy?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "BANYAKKKKK! 🚀💝",              // Shows when they go past 1000%
        normal: "SANGAT SANGATTT 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! HEHEHEHE 🎉💝💖💝💓",
        message: "Happy Valentine’s Day sayanggg! <3, i just want to say thank you for being in my life, since the day i met you, many small things became special. talking to you after a long day, waiting for your message, hearing your laugh, and even sitting in silence together sayang, all of it makes me happy <3, when I feel stressed, you somehow make everything okay again without even trying. I dont always know the right words, but my heart always feels full when I think about you sayang, i like the way you listen to me, the way you understand me, and the way you stay even when im not at my best, you make me feel accepted just as i am, and that means more to me than anything else <3, i also want you to know that you are beautiful to me in every way, not only how you look but how you act and care, you are kind, patient, and warm, and people feel comfortable around you because of that, you make me want to improve myself,  not because you ask me to, but because you inspire me, being with you feels peaceful, like i finally found my safe place, i dont need big adventures or expensive things, just walking beside you already feels enough sayang, no matter where we go or what we do, the best part is always you, you are not only my girlfriend, you are also my best friend and my comfort. <3, today is Valentine’s Day, but my feelings for you are not only for today, i promise i will keep choosing you again and again, iwill try my best to understand you, to care about your feelings, and to grow together with you, life will not always be easy, but i want us to face it side by side sayang, i dont know what the future looks like yet, but i know i want you inside it, thank you for loving me, supporting me, and staying with me sayaanggg ><, you are my happiness, my peace, and the person i want to come home to every day, Happy Valentine’s Day, sayang. i love you more than i can ever fully explain, and ihope you feel it in everything i do. i love you soo muchh sayanggg <33333",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
