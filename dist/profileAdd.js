$.getJSON('https://raw.githubusercontent.com/Akash52/JS-Project-Display/master/data.json', (data) => {

    // console.log(data); // this will show the info it in firebug console
    let profileKeys = ['handle', 'image_link', 'message', 'message1'];
    /**
     * Check if a profile has handle image_link and message properties
     */
    let isProfileValid = (profile) => (profileKeys.every((k) => k in profile));

    /**
     * Given an array of profiles, keep only one for handle (handle is the id of the profile)
     */
    let getUniqueProfiles = (profiles) => (
        Array.from(new Set(profiles.map((p) => p.handle))).map((id) => {
            let profile = {};
            profileKeys.forEach((k) => {
                profile[k] = profiles.find((p) => p.handle === id)[k];
            });
            return profile;
        })
    );

    // get only unique and valid profiles
    let profiles = getUniqueProfiles(data.profiles.filter(isProfileValid));

    let cardParent = document.getElementById('profile-cards');
    for (let index = 0; index < profiles.length; index += 1) {
        let card = document.createElement('div');


        let = profile = profiles[index];
        card.innerHTML = `
        <!-- CARD COLUMNS ddd -->
        <div class="container mt-5 mx-auto px-2">
           <!-- Flex on med screens and up -->
           <div class="md:flex">
             <div
               class="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded"
             >
               <div class="lg:flex lg:items-center">
                 <div class="lg:flex-shrink-0">
                   <img class="rounded-lg lg:w-64" src="hh.png" alt="" />
                 </div>
                 <div class="mt-4 lg:mt-0 lg:ml-6">
                   <div
                     class="uppercase tracking-wide text-sm text-indigo-600 font-bold"
                   >
                     Networking
                   </div>
                   <a
                     href="#"
                     class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                     >Finding connections to help your business grow</a
                   >
                 </div>
               </div>
             </div>
        `;
        cardParent.appendChild(card);
    }
});
