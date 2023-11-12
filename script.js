  // Sample geological era data
        const eraData = {
            "Hadean": [46000000, 40000000],
            "Archean": [40000000, 250000000],
            "Proterozoic": [250000000, 541000000],
            "Phanerozoic": [541000000, "Present"],
            "Paleozoic": [541000000, 252000000],
            "Cambrian": [540000000, 486000000],
            "Ordovician": [485000000, 443000000],
            "Silurian": [443000000, 419000000],
            "Devonian": [419000000, 359000000],
            "Mississippian": [359000000, 324000000],
            "Pennsylvanian": [323000000, 298000000],
            "Permian": [298000000, 252000000],
            "Mesozoic" : [252000000, 66000000],
            "Triassic": [252000000, 201000000],
            "Jurassic": [201000000, 145000000],
            "Cretaceous": [145000000, 66000000],
            "Cenozoic": [66000000, "today"],
            "Paleogene": [66000000, 23000000],
            "Paleocene": [66000000, 56000000],
            "Eocene": [56000000, 34000000],
            "Oligocene": [34000000, 23000000],
            "Neogene": [23000000, 2600000],
            "Miocene": [23000000, 5300000],
            "Pliocene": [5300000, 2600000],
            "Quaternary": [2600000, "present"],
            "Pleistocene": [2600000, 11700],
            "Holocene": [11700, "present"],
            "Greenlandian": [11700, 8200],
            "Northgrippian": [8200, 4200],
            "Meghalayan": [4200, 0]
            
        };

        const inputType = document.getElementById("inputType");
        const eraInput = document.getElementById("eraInput");
        const yearsInput = document.getElementById("yearsInput");
        const eraSelect = document.getElementById("era");
        const years = document.getElementById("years");
        const calculateButton = document.getElementById("calculate");
        const result = document.getElementById("result");
        

   
        
        // Function to calculate based on input type
        function calculate() {


            const selectedInputType = inputType.value;
            const selectedEra = eraSelect.value;
            const selectedYears = parseFloat(years.value);
            const unitData = eraData[selectedEra];
            
            

            if (unitData) {
                if (selectedEra === "Phanerozoic") {
                    result.textContent = "The Phanerozoic eon extends from 541 million years ago until the present, encompassing the Phanerozoic era, periods, epochs, and ages.The Phanerozoic Eon is the most recent eon in the geological time scale and covers approximately 541 million years to the present day.Here are some key points about the Phanerozoic Eon which are; Life Explosion,Three Major Eras, Major Extinctions,  Continental Drift, Evolution of Mammals and Birds, Human History, Ongoing Era.";
                    document.body.style.backgroundImage = 'url("./images/phanerozoic.jpg")'

                } else if (selectedEra === "Hadean") {
                    result.textContent = "The Hadean eon, spanning roughly from 4.6 to 4 billion years ago (4600 - 4000mya), is known for extreme heat, frequent celestial impacts, and the formation of the Moon. Conditions were initially inhospitable, gradually cooling to allow for the development of oceans and the emergence of early life.";
                    document.body.style.backgroundImage = 'url("./images/hadean1.jpg")'
                }
                 else if (selectedEra === "Archean") {
                    result.textContent = "The Archean eon, occurring from about 4 to 2.5 billion years ago (4000 - 2500mya), is marked by the formation of stable continental crust, the emergence of early life, and the development of primitive oceans. It represents a crucial period in Earth's history where the foundations for more complex life forms were laid.";
                    document.body.style.backgroundImage = 'url("./images/archean.jpg")'
                } else if (selectedEra === "Proterozoic") {
                    result.textContent = "The Proterozoic eon, lasting from around 2.5 billion to 541 million years ago (2500 - 541mya), is marked by the emergence of complex life forms, including the first multicellular organisms. It encompasses significant geological events, such as the formation of supercontinents and the rise of oxygen levels in the atmosphere, paving the way for more advanced life forms in the subsequent Phanerozoic eon.";
                    document.body.style.backgroundImage = 'url("./images/proyerozoic eon.webp")'

                } else if (selectedEra === "Paleozoic") {
                    result.textContent = "The Paleozoic Era, spanning approximately 541 to 252 million years ago, witnessed remarkable evolutionary events, earning it the title of the 'Age of Ancient Life'. It encompasses the emergence of complex multicellular organisms, the colonization of land by plants and animals, and the evolution of diverse marine life. The Paleozoic Era concludes with the Permian-Triassic extinction event, a major biological crisis that paved the way for the Mesozoic Era. This dynamic period laid the foundation for the rich biodiversity seen in subsequent eras.";
                    document.body.style.backgroundImage = 'url("./images/paleozoic.jpg")'

                } else if (selectedEra === "Mesozoic") {
                    result.textContent = "The Mesozoic Era, spanning approximately 180 million to 66 million years ago, is often referred to as the 'Age of Dinosaurs.'This era is characterized by the dominance and evolution of various dinosaur species. Divided into three periods – the Triassic, Jurassic, and Cretaceous – the Mesozoic witnessed significant geological and climatic changes. It marked the breakup of the supercontinent Pangaea, the rise of flowering plants, and the eventual mass extinction event that concluded the era, paving the way for the Cenozoic Era.";
                    document.body.style.backgroundImage = 'url("./images/mesozoic.jpg")'

                } else if (selectedEra === "Cambrian") {
                    result.textContent = "The Cambrian Period, approximately 541 to 485 million years ago, is renowned as a pivotal era in Earth's history. It marked a profound explosion of life, often referred to as the 'Cambrian Explosion'. During this time, a wide array of complex, multicellular organisms emerged, including the first recognizable arthropods and chordates. The Cambrian Period laid the foundation for the diverse ecosystems that would evolve in the subsequent geological periods, shaping the trajectory of life on our planet.";
                    document.body.style.backgroundImage = 'url("./images/cambrian.jpg")'

                } else if (selectedEra === "Ordovician") {
                    result.textContent = "The Ordovician Period, approximately 485 to 443 million years ago, was marked by a flourishing diversity of marine life, including the evolution of early jawless fish. The supercontinent Gondwana continued to drift southward, resulting in a relatively warm climate. The period witnessed the first true coral reefs and the widespread presence of trilobites. The Ordovician ended with a mass extinction event, paving the way for the subsequent Silurian Period.";
                    document.body.style.backgroundImage = 'url("./images/ordovician2.jpg")'

                } else if (selectedEra === "Silurian") {
                    result.textContent = "The Silurian Period, lasting from approximately 443 to 419 million years ago, was marked by the diversification of marine life. During this time, jawed fish became more prominent, and early land plants began to emerge. The Silurian is characterized by significant geological events, including the formation of coral reefs and the continuation of the colonization of Earth's landmasses by simple vascular plants. It was a pivotal era in the evolutionary history of life on our planet.";
                    document.body.style.backgroundImage = 'url("./images/silurian1.jpg")'

                } else if (selectedEra === "Devonian") {
                    result.textContent = "The Devonian Period, spanning from approximately 419 to 359 million years ago, is often referred to as the 'Age of Fishes'. During this time, diverse fish species flourished and evolved, with the emergence of jawed and bony fish. The first amphibians appeared, marking the transition from aquatic to terrestrial life. The Devonian also witnessed the development of forests and the colonization of land by early plants. Notable events include the formation of expansive coral reefs and the evolution of complex ecosystems.";
                    document.body.style.backgroundImage = 'url("./images/devonian.jpg")'
                }
                else if (selectedEra === "Mississippian") {
                    result.textContent = "The Mississippian Period, approximately 359 to 324 million years ago, was characterized by the rise of complex, land-dwelling vertebrates and the formation of extensive coral reefs. This geological era witnessed the emergence of early amphibians and marked the later stages of the Carboniferous Period. The lush, swampy landscapes of the Mississippian hosted diverse flora and fauna, contributing to the formation of coal deposits that would become essential energy resources in the future.";
                    document.body.style.backgroundImage = 'url("./images/miss.jpg")'
                }
                else if (selectedEra === "Pennsylvanian") {
                    result.textContent = "The Pennsylvanian Period, part of the Carboniferous period, existed from approximately 323 to 298 million years ago. Known for extensive swamp forests, it witnessed the evolution of early reptiles and the rise of coal-forming forests. The period's diverse plant life laid the foundation for significant coal deposits, contributing to Earth's geological and ecological history.";
                    document.body.style.backgroundImage = 'url("./images/penn.jpg")'

                }
                else if (selectedEra === "Permian") {
                    result.textContent = "The Permian Period, lasting from approximately 299 to 251 million years ago, marked the end of the Paleozoic Era. It was a time of significant geological and biological events. The supercontinent Pangaea formed during the early Permian, bringing most landmasses together. The period saw the diversification of reptiles and the emergence of early mammals. However, it concluded with the largest mass extinction in Earth's history, wiping out around 96% of marine species and paving the way for the Mesozoic Era.";
                    document.body.style.backgroundImage = 'url("./images/permian.jpg")'
                }
                else if (selectedEra === "Triassic") {
                    result.textContent = "The Triassic Period, spanning approximately 252 to 201 million years ago, followed the devastating Permian-Triassic extinction event. During this era, Earth saw the emergence of the first dinosaurs, the evolution of early mammals, and the formation of the supercontinent Pangaea. The Triassic was marked by diverse ecosystems, including vast deserts and lush tropical forests. This period laid the groundwork for the evolutionary developments that would shape the subsequent Jurassic and Cretaceous periods.";
                    document.body.style.backgroundImage = 'url("./images/triassic2.jpg")'
                }
                else if (selectedEra === "Jurassic") {
                    result.textContent = "The Jurassic Period, occurring approximately 201 to 145 million years ago, was a pivotal chapter in Earth's history. Known for the dominance of dinosaurs, this era witnessed the evolution of iconic species like the mighty Tyrannosaurus rex and the gentle Brachiosaurus. The supercontinent Pangaea began to break apart, forming the early outlines of today's continents. The Jurassic seas teemed with diverse marine life, including ichthyosaurs and plesiosaurs. It was a time of ecological innovation and the flourishing of various plant and animal species, leaving an indelible mark on the planet's evolutionary timeline.";
                    document.body.style.backgroundImage = 'url("./images/jurassic.jpg")'
                }
                else if (selectedEra === "Cretaceous") {
                    result.textContent = "The Cretaceous Period, spanning approximately from 145 to 66 million years ago, was a pivotal era in Earth's history. Known for its diverse array of dinosaurs, including the iconic Tyrannosaurus rex and Triceratops, this period also witnessed the evolution of flowering plants. The Cretaceous ended with a mass extinction event, likely caused by a combination of factors, leading to significant changes in Earth's ecosystems and paving the way for the rise of mammals.";
                    document.body.style.backgroundImage = 'url("./images/cretaceous.jpg")'
                }

                else if (selectedEra === "Cenozoic") {
                    result.textContent = "The Cenozoic Era, spanning from 66 million years ago to the present, is characterized by the diversification and dominance of mammals, including humans. It witnessed the evolution of numerous species, major climatic shifts, and the formation of recognizable landscapes. The Cenozoic is divided into the Paleogene, Neogene, and Quaternary periods, with notable events such as the rise of grasslands, ice ages, and the development of modern ecosystems";
                    document.body.style.backgroundImage = 'url("./images/cenozoic.jpg")'
                }
                else if (selectedEra === "Paleogene") {
                    result.textContent = "The Paleogene period, lasting from approximately 66 to 23 million years ago, follows the extinction event that marked the end of the Mesozoic Era. It's characterized by the diversification of mammals, the emergence of modern birds, and the development of diverse plant life. The climate transitioned from warm to cooler conditions, and significant geological events, such as the formation of the Himalayas, occurred during this period. The Paleogene sets the stage for the evolution of ecosystems leading into the Neogene period.";
                    document.body.style.backgroundImage = 'url("./images/paleogene1.jpg")'
                }
                else if (selectedEra === "Neogene") {
                    result.textContent = "The Neogene Period, spanning from around 23 million to 2.6 million years ago, is marked by significant climatic changes, the evolution of diverse mammalian species, and the emergence of recognizable ecosystems. It includes the Miocene and Pliocene epochs, witnessing the spread of grasslands and the evolution of hominids, leading to the eventual appearance of early humans. The Neogene is a crucial chapter in Earth's history, shaping the world we recognize today.";
                    document.body.style.backgroundImage = 'url("./images/neogene.jpg")'
                }
                else if (selectedEra === "Quaternary") {
                    result.textContent = "The Quaternary Period, spanning approximately the last 2.6 million years, is characterized by the development of modern humans and significant climatic fluctuations, including multiple ice ages. It encompasses the evolution of Homo sapiens, the emergence of complex societies, and the shaping of the Earth's landscape by glacial and interglacial cycles. The Quaternary is the most recent period in Earth's history and continues to influence our planet's climate and biodiversity.";
                    document.body.style.backgroundImage = 'url("./images/quartenary2.jpg")'
                }
                else if (selectedEra === "Paleocene") {
                    result.textContent = "The Paleocene Epoch, lasting from approximately 66 to 56 million years ago, immediately followed the mass extinction event that marked the end of the Cretaceous Period. During the Paleocene, Earth witnessed the recovery and diversification of life. Mammals thrived and diversified, taking advantage of the ecological niches left vacant by the extinction of dinosaurs. The climate was relatively warm, and the continents continued to drift into positions resembling their current arrangement. The Paleocene is a crucial period in Earth's history as it sets the stage for the subsequent epochs, leading to the development of modern ecosystems.";
                    document.body.style.backgroundImage = 'url("./images/paleocene.jpg")'
                }
                else if (selectedEra === "Eocene") {
                    result.textContent = "The Eocene Epoch, occurring from about 56 to 33.9 million years ago, was marked by a warm and temperate climate. It witnessed the diversification of mammals, the emergence of modern groups of plants, and the expansion of grasslands. Notably, the Eocene is a crucial period in the evolution of Earth's biodiversity, setting the stage for significant ecological changes in the later epochs.";
                    document.body.style.backgroundImage = 'url("./images/eocene.jpg")'
                }
                else if (selectedEra === "Oligocene") {
                    result.textContent = "The Oligocene Epoch, occurring approximately 33.9 to 23 million years ago, was a pivotal period in Earth's history. Known for a cooling climate and the development of diverse grasslands, it witnessed the evolution of early mammals, including the appearance of iconic creatures like the first elephants and horses. The Oligocene set the stage for the dynamic transformations that unfolded in the subsequent epochs, shaping the biological and geological landscape of our planet.";
                    document.body.style.backgroundImage = 'url("./images/oligocene.jpg")'
                }
                else if (selectedEra === "Miocene") {
                    result.textContent = "The Miocene Epoch, spanning from about 23 to 5.3 million years ago, is recognized for a dynamic climate and the evolution of diverse mammalian species. During this period, grasslands expanded, and the Earth underwent significant geological and environmental changes. The Miocene is crucial for understanding the evolutionary history of various modern animals, including hominoids.";
                    document.body.style.backgroundImage = 'url("./images/miocene.jpg")'
                }
                else if (selectedEra === "Pliocene") {
                    result.textContent = "The Pliocene Epoch, spanning from approximately 5.3 to 2.6 million years ago, was marked by a relatively warm climate and the emergence of recognizable modern mammals. It witnessed the continued evolution of various species, including hominins, and the formation of iconic landscapes. The Pliocene set the stage for the more recent geological and climatic events that shaped the Earth into its current state.";
                    document.body.style.backgroundImage = 'url("./images/pliocene.jpg")'
                }
                else if (selectedEra === "Pleistocene") {
                    result.textContent = "The Pleistocene Epoch, spanning from approximately 2.6 million to 11,700 years ago, is characterized by multiple ice ages and the evolution of early humans. During this epoch, vast ice sheets shaped landscapes, influencing the distribution of species. Iconic megafauna like mammoths and saber-toothed cats roamed the Earth, while Homo sapiens emerged and adapted to the changing environments. The Pleistocene's climatic fluctuations and diverse ecosystems played a crucial role in shaping the world we recognize today.";
                    document.body.style.backgroundImage = 'url("./images/pleistocene.jpg")'
                }
                else if (selectedEra === "Holocene") {
                    result.textContent = "The Holocene Epoch, spanning from around 11,700 years ago to the present day, represents the current geological epoch. Characterized by a relatively stable climate and the rise of human civilization, the Holocene has witnessed the development of agriculture, the growth of societies, and significant environmental changes. It is the epoch in which we currently live, marked by the flourishing of diverse ecosystems and the profound impact of human activities on the Earth.";
                    document.body.style.backgroundImage = 'url("./images/holocene.jpg")'

                } else if (selectedEra === "Greenlandian") {
                    result.textContent = "The Greenlandian Age was a time period that lasted from approximately 11,700 to 8,300 years ago. It was the first of three subdivisions of the Holocene Epoch, which is the current geological epoch. The Greenlandian Age was characterized by a relatively warm and stable climate, which allowed for the development of human civilizations and the spread of agriculture.The end of the Greenlandian Age marked the beginning of the Northgrippian Age, a period of colder and more variable climate.";
                    document.body.style.backgroundImage = 'url("./images/green1.jpg")'
                }
                else if (selectedEra === "Northgrippian") {
                    result.textContent = "The Northgrippian Age is a term used in the geological timescale to denote a specific interval during the Holocene epoch, which began around to 4200 years ago. Named after North Greenland, this age reflects a period characterized by a distinctive climate and environmental conditions. It's part of the larger Holocene epoch, marked by the transition from the last glacial period to the relatively stable and warmer climate of today. The Northgrippian Age is significant for studying environmental changes and their impact on Earth's ecosystems.";

                    document.body.style.backgroundImage = 'url("./images/north.jpg")'
                }
                else if (selectedEra === "Meghalayan") {
                    result.textContent = "The Meghalayan Age is the most recent subdivision of the Holocene epoch, marking the last 4,200 years of Earth's geological history. Named after the Indian state of Meghalaya, this age is defined by a climatic event, specifically a significant global drought. The Meghalayan Age provides insights into the impact of climatic shifts on human civilizations and ecosystems during this relatively recent period.";
                    document.body.style.backgroundImage = 'url("./images/megha.jpg")'
                }
                else {
                    const eraRange = eraData[selectedEra];
                 result.textContent = `${selectedEra} is roughly between ${eraRange[0]} - ${eraRange[1]} million years ago.`;
                }
            } else {
                result.textContent = "Invalid input.";
            }
             
            if (selectedInputType === "years" ) {
                const era = getEraFromYears(selectedYears);
                result.textContent = `${selectedYears} years ago is in the ${era} eon/era/period/epoch/age of the geological time scale.`;
                
            } 

        
        // Function to get era from years
        function getEraFromYears(years) {
            for (const era in eraData) {
                const [start, end] = eraData[era];
                if (years >= end && years <= start) {
                    return era;
                }
            }
            return "Not found";
 
    }
        }

        // Calculate on button click
        calculateButton.addEventListener("click", calculate);
   
