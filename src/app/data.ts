const data = [
  {
    question_number: 1,
    question:
      "You will be a safer driver if you drive just a little bit slower because",
    options: [
      "you will have time to look at the scenery",
      "you gain more experience by driving slowly",
      "You can respond to hazards by slowing down quicker",
    ],
    correct_answer: "You can respond to hazards by slowing down quicker",
    user_answer: "you will have time to look at the scenery",
    is_correct: false,
  },
  {
    question_number: 2,
    question:
      "You wish to overtake safely on a two-way road. You must NOT overtake if",
    options: [
      "There are no road markings in the centre of the road.",
      "There are broken white lines in the centre of the road.",
      "There are two solid yellow lines in the centre of the road.",
    ],
    correct_answer:
      "There are two solid yellow lines in the centre of the road.",
    user_answer: "There are no road markings in the centre of the road.",
    is_correct: false,
  },
  {
    question_number: 3,
    question: "When you are driving behind a truck it is best to drive",
    options: [
      "Close behind it",
      "Far enough behind the truck so you can see the driver in the trucks rear vision mirror",
      "Beside the trucks left door",
    ],
    correct_answer:
      "Far enough behind the truck so you can see the driver in the trucks rear vision mirror",
    user_answer:
      "Far enough behind the truck so you can see the driver in the trucks rear vision mirror",
    is_correct: true,
  },
  {
    question_number: 4,
    question: "For regular saloon cars, do not drive through if",
    options: [
      "the flood is more than 50% of the tire height",
      "the flood is just starting",
      "the flood is starting to subside.",
    ],
    correct_answer: "the flood is more than 50% of the tire height",
    user_answer: "the flood is more than 50% of the tire height",
    is_correct: true,
  },
  {
    question_number: 5,
    question: "Driving in flood is difficult because",
    options: [
      "flooding reduces the visibility.",
      "flood is very unpredictable.",
      "you cannot see if there are deep holes along the path.",
    ],
    correct_answer: "you cannot see if there are deep holes along the path.",
    user_answer: "you cannot see if there are deep holes along the path.",
    is_correct: true,
  },
  {
    question_number: 6,
    question: "Drivers using mobile phones",
    options: [
      "Commit same mistakes again and again.",
      "Commit mistakes in judgment.",
      "Commit several violations.",
    ],
    correct_answer: "Commit mistakes in judgment.",
    user_answer: "Commit several violations.",
    is_correct: false,
  },
  {
    question_number: 7,
    question: "Driving too fast for the situation is",
    options: [
      "an unacceptable driving behavior.",
      "a proper way of driving.",
      "just the way other people drive.",
    ],
    correct_answer: "an unacceptable driving behavior.",
    user_answer: "an unacceptable driving behavior.",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "Signaling when lane changing is important because",
    options: [
      "it helps reduce crash risks",
      "it helps reduce braking distance",
      "it helps reduce brake wear",
    ],
    correct_answer: "it helps reduce crash risks",
    user_answer: "it helps reduce crash risks",
    is_correct: true,
  },
  {
    question_number: 9,
    question: "Driving in a safe manner means",
    options: [
      "driving at posted speed always.",
      "allowing for mistakes of others.",
      "maintaining 2-second gap always.",
    ],
    correct_answer: "allowing for mistakes of others.",
    user_answer: "maintaining 2-second gap always.",
    is_correct: false,
  },
  {
    question_number: 10,
    question: "After making the turn with the indicator on,",
    options: [
      "Indicator will always turn off by itself.",
      "Check that it is turned off.",
      "Indicator can be left on.",
    ],
    correct_answer: "Check that it is turned off.",
    user_answer: "Check that it is turned off.",
    is_correct: true,
  },
  {
    question_number: 11,
    question:
      "When traffic is not controlled by signs or police officers, you must give way to",
    options: [
      "vehicles from the main road to minor road",
      "vehicles from minor road to major road",
      "vehicles from the road facing a give way sign",
    ],
    correct_answer: "vehicles from the main road to minor road",
    user_answer: "vehicles from minor road to major road",
    is_correct: false,
  },
  {
    question_number: 12,
    question:
      "Which example is usually the result of using mobile phone while driving?",
    options: [
      "speeding up or slowing down without reason",
      "speeding up at all times",
      "speeding and stopping suddenly",
    ],
    correct_answer: "speeding up or slowing down without reason",
    user_answer: "speeding up or slowing down without reason",
    is_correct: true,
  },
  {
    question_number: 13,
    question:
      "In good driving conditions you should leave at least a two second gap between you and the car in front. When should you leave a larger gap?",
    options: [
      "at all times",
      "When driving conditions are good.",
      "when the driving conditions are poor such as sand storms or rain",
    ],
    correct_answer:
      "when the driving conditions are poor such as sand storms or rain",
    user_answer: "at all times",
    is_correct: false,
  },
  {
    question_number: 14,
    question:
      "Who is the best person to decide whether a medicine might affect your driving?",
    options: ["your doctor or a pharmacist", "you", "your driving instructor"],
    correct_answer: "your doctor or a pharmacist",
    user_answer: "your doctor or a pharmacist",
    is_correct: true,
  },
  {
    question_number: 15,
    question: "Which sign means the road ahead is uneven?",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "B",
    is_correct: false,
  },
  {
    question_number: 16,
    question: "What does this sign mean?",
    options: ["A bend in the road.", "A slippery surface.", "A bumpy road."],
    correct_answer: "A slippery surface.",
    user_answer: "A slippery surface.",
    is_correct: true,
  },
  {
    question_number: 17,
    question:
      "Ideally, children should ride in the back seat of a vehicle until;",
    options: ["10 years old", "5 years old", "3 years old"],
    correct_answer: "10 years old",
    user_answer: "10 years old",
    is_correct: true,
  },
  {
    question_number: 18,
    question: "One of many ways to ensure your child rides your car safely is;",
    options: [
      "Use the best safety restraint for your child’s size.",
      "Use the adult seat belt for your child",
      "Holding the child firmly on your lap",
    ],
    correct_answer: "Use the best safety restraint for your child’s size.",
    user_answer: "Use the adult seat belt for your child",
    is_correct: false,
  },
  {
    question_number: 19,
    question:
      "If this system is activated during harsh braking, the driver will feel brake pedal pulsation.",
    options: [
      "Electronic Stability Program",
      "Anti-Lock Brake System",
      "Conventional Cruise Control",
    ],
    correct_answer: "Anti-Lock Brake System",
    user_answer: "Anti-Lock Brake System",
    is_correct: true,
  },
  {
    question_number: 20,
    question:
      "The parking Assistance System enables the car park on its own. During the parking maneuver, the driver should;",
    options: [
      "Monitor the safety of the maneuver and the environment and intervene if required",
      "Relax and leave the parking maneuver to the system",
      "Assist the system by controlling the steering and the brake pedal",
    ],
    correct_answer:
      "Monitor the safety of the maneuver and the environment and intervene if required",
    user_answer:
      "Assist the system by controlling the steering and the brake pedal",
    is_correct: false,
  },
  {
    question_number: 21,
    question:
      "This safety system is designed to prevent collision with the vehicle in front.",
    options: [
      "Forward Collision Mitigation",
      "Anti-Lock brake System",
      "Electronic Stability Program",
    ],
    correct_answer: "Forward Collision Mitigation",
    user_answer: "Forward Collision Mitigation",
    is_correct: true,
  },
  {
    question_number: 22,
    question:
      "Plan ahead if you are travelling somewhere that is not familiar to you. It helps;",
    options: [
      "In planning your trip",
      "Reduce the distraction in the car",
      "Reduce the stress of driving",
    ],
    correct_answer: "Reduce the stress of driving",
    user_answer: "In planning your trip",
    is_correct: false,
  },
  {
    question_number: 23,
    question:
      "When you are observing the 2-second rule while following another vehicle, it means;",
    options: [
      "You are tailgating",
      "You are not tailgating",
      "Another vehicle is tailgating you",
    ],
    correct_answer: "You are not tailgating",
    user_answer: "You are not tailgating",
    is_correct: true,
  },
  {
    question_number: 24,
    question:
      "What is the main reason for driving more slowly during night time?",
    options: [
      "Pedestrians are harder to see, especially those wearing dark clothing",
      "It is harder to see during sundown",
      "It is harder to see the lines on the road",
    ],
    correct_answer:
      "Pedestrians are harder to see, especially those wearing dark clothing",
    user_answer:
      "Pedestrians are harder to see, especially those wearing dark clothing",
    is_correct: true,
  },
  {
    question_number: 25,
    question:
      "It is not safe to use a mobile phone while driving (even with hands-free kit) because;",
    options: [
      "This helps the driver focus more on the driving task",
      "This reduces the driver’s concentration from the driving task",
      "It helps you stay in control of yourself",
    ],
    correct_answer:
      "This reduces the driver’s concentration from the driving task",
    user_answer: "This helps the driver focus more on the driving task",
    is_correct: false,
  },
  {
    question_number: 26,
    question:
      "A slip road on a highway is provided a good distance from the start to the end. Why?",
    options: [
      "To allow merging vehicles to accelerate and join the traffic smoothly",
      "To allow for several vehicles to stop and wait",
      "To allow for other vehicles to overtake",
    ],
    correct_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    user_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    is_correct: true,
  },
  {
    question_number: 27,
    question:
      "While merging onto the main road, some of the vehicles on the main road swerved to avoid collision. What just happened?",
    options: [
      "The driver may have started accelerating from the end of the slip road",
      "The driver stopped at the end of the slip road",
      "The driver stopped at a red signal",
    ],
    correct_answer:
      "The driver may have started accelerating from the end of the slip road",
    user_answer: "The driver stopped at the end of the slip road",
    is_correct: false,
  },
  {
    question_number: 28,
    question:
      "It is important not to do this to safely leave the main stream of traffic.",
    options: [
      "Signal your intention to leave the traffic",
      "Cut in and drive over the chevron markings",
      "Reduce speed once inside the slip road",
    ],
    correct_answer: "Cut in and drive over the chevron markings",
    user_answer: "Signal your intention to leave the traffic",
    is_correct: false,
  },
  {
    question_number: 29,
    question:
      "How do you safely exit the main road and without disturbing the flow of traffic?",
    options: [
      "Signal your intention, cut-in at the end of the slip road.",
      "Signal your intention, enter the slip road early",
      "Without using the indicator, enter the slip road early",
    ],
    correct_answer: "Signal your intention, enter the slip road early",
    user_answer: "Signal your intention, enter the slip road early",
    is_correct: true,
  },
  {
    question_number: 30,
    question:
      "To ensure safety when dealing with pedestrians, it is best not to;",
    options: [
      "Remember the pedestrian have the priority",
      "Assume the pedestrian has seen you",
      "Slow down and give way",
    ],
    correct_answer: "Assume the pedestrian has seen you",
    user_answer: "Slow down and give way",
    is_correct: false,
  },
  {
    question_number: 31,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 32,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "Why should you exercise patience when following a slow moving truck?",
    options: [
      "Trucks are supposed to be slow",
      "Its load may be too heavy to move faster",
      "It is best to overtake quickly",
    ],
    correct_answer: "Its load may be too heavy to move faster",
    user_answer: "Its load may be too heavy to move faster",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "As a safe driver dealing with heavy trucks on the road, what should you avoid doing?",
    options: [
      "Argue with the truck driver who may be tired due to long working hours.",
      "Allow more space especially whentrucks are turning into your wayespecially at T-Junctions",
      "Position yourself where the truck driver can easily see you.",
    ],
    correct_answer:
      "Argue with the truck driver who may be tired due to long working hours.",
    user_answer:
      "Allow more space especially whentrucks are turning into your wayespecially at T-Junctions",
    is_correct: false,
  },
  {
    question_number: 35,
    question: "If you are following a motorcycle, be aware that;",
    options: [
      "Motorcycles may be able to accelerate and/or stop faster than a car.",
      "Sharing the space with motorcycle in a lane is acceptable",
      "Acceleration of motorcycle is the same with cars",
    ],
    correct_answer:
      "Motorcycles may be able to accelerate and/or stop faster than a car.",
    user_answer:
      "Motorcycles may be able to accelerate and/or stop faster than a car.",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "When following a motorcycle, it is important not to tail gate because;",
    options: [
      "This may intimidate the rider and may result to loss of control.",
      "Motorcycles are required to give way to pedestrians",
      "Motorcycle riders must wear protective helmet",
    ],
    correct_answer:
      "This may intimidate the rider and may result to loss of control.",
    user_answer: "Motorcycles are required to give way to pedestrians",
    is_correct: false,
  },
  {
    question_number: 37,
    question:
      "When driving on busy streets, be particularly alert for people trying to cross and walking from;",
    options: [
      "Behind the tall buildings",
      "Front or behind vehicles that are stopped or moving slowly.",
      "Freeway exits",
    ],
    correct_answer:
      "Front or behind vehicles that are stopped or moving slowly.",
    user_answer: "Front or behind vehicles that are stopped or moving slowly.",
    is_correct: true,
  },
  {
    question_number: 38,
    question: "When giving way to emergency vehicles, it is;",
    options: [
      "Fine to cross the red signal",
      "Acceptable to use the road shoulders",
      "Not allowed to use the road shoulders",
    ],
    correct_answer: "Not allowed to use the road shoulders",
    user_answer: "Fine to cross the red signal",
    is_correct: false,
  },
  {
    question_number: 39,
    question:
      "Multiple Regulatory High Visibility Signs. You will find this at;",
    options: [
      "The beginning of the road",
      "The intersection",
      "The entrance of the tunnel",
    ],
    correct_answer: "The entrance of the tunnel",
    user_answer: "The entrance of the tunnel",
    is_correct: true,
  },
  {
    question_number: 40,
    question: "What is the proper behavior when you encounter this sign?",
    options: [
      "Extreme caution, limit speed to 40 kph",
      "Children crossing ahead",
      "Speed limit is maximum 40 kph",
    ],
    correct_answer: "Extreme caution, limit speed to 40 kph",
    user_answer: "Children crossing ahead",
    is_correct: false,
  },
  {
    question_number: 41,
    question:
      "If your vehicle breaks down on the road, think of your safety and;",
    options: [
      "do not stand in front of your vehicle",
      "avoid being distracted",
      "take the nearest exit or turn",
    ],
    correct_answer: "do not stand in front of your vehicle",
    user_answer: "take the nearest exit or turn",
    is_correct: false,
  },
  {
    question_number: 42,
    question:
      "What does the UAE Traffic Law say about passing another vehicle travelling in the same direction?",
    options: [
      "driver must only pass on the right",
      "driver must only pass on the left",
      "driver may pass either left or right",
    ],
    correct_answer: "driver must only pass on the left",
    user_answer: "driver may pass either left or right",
    is_correct: false,
  },
  {
    question_number: 43,
    question: "In case of collision, those involved must find;",
    options: [
      "an exit road as quickly as possible",
      "a reliable witness to the incident immediately",
      "a safest place immediately",
    ],
    correct_answer: "a safest place immediately",
    user_answer: "a reliable witness to the incident immediately",
    is_correct: false,
  },
  {
    question_number: 44,
    question:
      "If you are trying to report a traffic accident using the Dubai Police App, what safety message you will see on the app?",
    options: [
      "Move to safe location, do not obstruct traffic",
      "Drive Safely, everytime",
      "Buckle up, always",
    ],
    correct_answer: "Move to safe location, do not obstruct traffic",
    user_answer: "Move to safe location, do not obstruct traffic",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "To inquire about traffic fines using the Dubai Police App, you may use the plate number, TC number, license and;",
    options: ["Vehicle ID Number (VIN)", "Ticket number", "Makani number"],
    correct_answer: "Vehicle ID Number (VIN)",
    user_answer: "Ticket number",
    is_correct: false,
  },
  {
    question_number: 46,
    question:
      "You are the driver of vehicle A. You are parked and about to enter the stream of traffic. You must give way to",
    options: [
      "vehicle B only",
      "the bike rider only",
      "both the bike rider and vehicle B",
    ],
    correct_answer: "both the bike rider and vehicle B",
    user_answer: "both the bike rider and vehicle B",
    is_correct: true,
  },
  {
    question_number: 47,
    question: "You are driving car A. Do not cut in front of the truck because",
    options: [
      "trucks need plenty space to stop",
      "trucks have right of way over car",
      "truck drivers are in hurry",
    ],
    correct_answer: "trucks need plenty space to stop",
    user_answer: "trucks need plenty space to stop",
    is_correct: true,
  },
  {
    question_number: 48,
    question: "If your car breaks down you should",
    options: [
      "warn other drivers by using hazards lights",
      "call the police station",
      "leave vehicle on the road and walk away",
    ],
    correct_answer: "warn other drivers by using hazards lights",
    user_answer: "warn other drivers by using hazards lights",
    is_correct: true,
  },
  {
    question_number: 49,
    question: "One of the difficulties of driving is",
    options: [
      "letting other drivers know when they are driving dangerously.",
      "Predicting what other drivers will do.",
      "checking your engine oil regularly.",
    ],
    correct_answer: "Predicting what other drivers will do.",
    user_answer:
      "letting other drivers know when they are driving dangerously.",
    is_correct: false,
  },
  {
    question_number: 50,
    question: "Driving conditions on a road will be",
    options: [
      "worse in dry weather.",
      "worse in wet weather.",
      "the same in dry or wet weather.",
    ],
    correct_answer: "worse in wet weather.",
    user_answer: "the same in dry or wet weather.",
    is_correct: false,
  },
  {
    question_number: 1,
    question: "Why is it important to scan the road scene when you drive?",
    options: [
      "it will help you stay awake",
      "you are more likely to anticipate potential hazards",
      "you will develop good vehicle control",
    ],
    correct_answer: "you are more likely to anticipate potential hazards",
    user_answer: "you are more likely to anticipate potential hazards",
    is_correct: true,
  },
  {
    question_number: 2,
    question:
      "There is a single white broken line painted in the centre of a two-way road. Where must you drive?",
    options: [
      "You must drive on the line.",
      "You must keep as close to the line as possible.",
      "You must keep to the right of the line.",
    ],
    correct_answer: "You must keep to the right of the line.",
    user_answer: "You must keep as close to the line as possible.",
    is_correct: false,
  },
  {
    question_number: 3,
    question: "Foggy conditions can be patchy, this means",
    options: [
      "fog is clearing in some areas but foggy again in some areas",
      "Fog is consistently dense in some areas.",
      "fog has cleared, it is time to speed up.",
    ],
    correct_answer:
      "fog is clearing in some areas but foggy again in some areas",
    user_answer: "Fog is consistently dense in some areas.",
    is_correct: false,
  },
  {
    question_number: 4,
    question:
      "Select the statement in terms of importance during foggy conditions.",
    options: [
      "Watch out for any electronically operated warning signs.",
      "Use the right edge of the road as a guide.",
      "Slow down gradually and drive at speed that suits the conditions.",
    ],
    correct_answer:
      "Slow down gradually and drive at speed that suits the conditions.",
    user_answer: "Watch out for any electronically operated warning signs.",
    is_correct: false,
  },
  {
    question_number: 5,
    question: "When driving and using mobile phones",
    options: [
      "driver must be more attentive.",
      "driver must look farther ahead.",
      "driver react slower than usual.",
    ],
    correct_answer: "driver react slower than usual.",
    user_answer: "driver must look farther ahead.",
    is_correct: false,
  },
  {
    question_number: 6,
    question: "Most appropriate use of the fast lane is when",
    options: [
      "rushing to your destination",
      "overtaking only",
      "overtaking and turning right ahead",
    ],
    correct_answer: "overtaking only",
    user_answer: "rushing to your destination",
    is_correct: false,
  },
  {
    question_number: 7,
    question: "Make your journey safer and more pleasant by",
    options: [
      "planning journey in advance.",
      "travelling during good weather only",
      "travelling with good companions only.",
    ],
    correct_answer: "planning journey in advance.",
    user_answer: "planning journey in advance.",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "Driving in a relaxed manner can be achieved by",
    options: [
      "not driving when intoxicated.",
      "using indicators always",
      "driving at slow lane when possible.",
    ],
    correct_answer: "driving at slow lane when possible.",
    user_answer: "driving at slow lane when possible.",
    is_correct: true,
  },
  {
    question_number: 9,
    question: "When driving on freeways, you must not",
    options: [
      "stop at anytime",
      "change lanes",
      "park or drive on the shoulder area",
    ],
    correct_answer: "park or drive on the shoulder area",
    user_answer: "change lanes",
    is_correct: false,
  },
  {
    question_number: 10,
    question:
      "When parking your vehicle, it is important not to park at these areas:",
    options: [
      "entrances and exits to houses, parking areas and schools",
      "within the premises of houses, parking areas,and schools",
      "10 meters from intersections and infront of a public transport depot",
    ],
    correct_answer: "entrances and exits to houses, parking areas and schools",
    user_answer: "entrances and exits to houses, parking areas and schools",
    is_correct: true,
  },
  {
    question_number: 11,
    question:
      "You are driving vehicle A. How should you manage the driving risk?",
    options: [
      "Wait until the car beind you sounds their horn",
      "Complete your turn quickly",
      "Wait until you can see where the cyclist is going",
    ],
    correct_answer: "Wait until you can see where the cyclist is going",
    user_answer: "Complete your turn quickly",
    is_correct: false,
  },
  {
    question_number: 12,
    question:
      "You are driving vehicle A. You want to overtake vehicle B. You are coming up to the top of a hill. You should",
    options: [
      "Stay behind vehicle B until you are over the hill and it is safe to overtake",
      "Overtake vehicle B before the top of the hill",
      "Overtake vehicle B on the right hand side",
    ],
    correct_answer:
      "Stay behind vehicle B until you are over the hill and it is safe to overtake",
    user_answer:
      "Stay behind vehicle B until you are over the hill and it is safe to overtake",
    is_correct: true,
  },
  {
    question_number: 13,
    question:
      "You start losing focus and drift on across other lane, it is time to",
    options: [
      "take a pill to stay focused on driving",
      "take time to open your windows",
      "take a break from your driving",
    ],
    correct_answer: "take a break from your driving",
    user_answer: "take time to open your windows",
    is_correct: false,
  },
  {
    question_number: 14,
    question: "Which of these signs warn you of hazard ahead?",
    options: ["A", "B", "C"],
    correct_answer: "C",
    user_answer: "B",
    is_correct: false,
  },
  {
    question_number: 15,
    question: "What does this sign mean?",
    options: [
      "Several bends in the road ahead.",
      "No overtaking.",
      "Road narrows ahead.",
    ],
    correct_answer: "Several bends in the road ahead.",
    user_answer: "Road narrows ahead.",
    is_correct: false,
  },
  {
    question_number: 16,
    question: "This sign indicates the beginning of median.",
    options: ["A", "B", "C"],
    correct_answer: "C",
    user_answer: "B",
    is_correct: false,
  },
  {
    question_number: 17,
    question:
      "You are feeling sleepy but you decided to drive for an important appointment.",
    options: [
      "You are now a hazard to your self",
      "You are now a hazard to others",
      "You are now a hazard to your self and to others",
    ],
    correct_answer: "You are now a hazard to your self and to others",
    user_answer: "You are now a hazard to your self and to others",
    is_correct: true,
  },
  {
    question_number: 18,
    question: "When driving, it is important to be aware of yourself. Why?",
    options: [
      "Because your physical and mental condition affects your driving",
      "Because driving mostly involves mental activity",
      "Because driving mostly involves physical activity",
    ],
    correct_answer:
      "Because your physical and mental condition affects your driving",
    user_answer:
      "Because your physical and mental condition affects your driving",
    is_correct: true,
  },
  {
    question_number: 19,
    question: "One of many ways to ensure your child rides your car safely is;",
    options: [
      "Use the best safety restraint for your child’s size.",
      "Use the adult seat belt for your child",
      "Holding the child firmly on your lap",
    ],
    correct_answer: "Use the best safety restraint for your child’s size.",
    user_answer: "Use the best safety restraint for your child’s size.",
    is_correct: true,
  },
  {
    question_number: 20,
    question: "Some of the Key Safety Points for Car Seats:",
    options: [
      "The back seat are exclusively for children. Adults in front only",
      "Adults may sit on the back seat along with children",
      "Restrain your child on every trip, every time and keep in the back seat",
    ],
    correct_answer:
      "Restrain your child on every trip, every time and keep in the back seat",
    user_answer:
      "The back seat are exclusively for children. Adults in front only",
    is_correct: false,
  },
  {
    question_number: 21,
    question:
      "To improve safety when driving to an unfamiliar destination, it is best to;",
    options: [
      "Rely on the street signs",
      "Plan ahead of time",
      "Use the familiar roads only",
    ],
    correct_answer: "Plan ahead of time",
    user_answer: "Use the familiar roads only",
    is_correct: false,
  },
  {
    question_number: 22,
    question: "If you find yourself tailgating another vehicle, it is best to;",
    options: [
      "Sound horn and warn other drivers of your speed",
      "Speed up and let the other vehicle move to another lane",
      "Slow down and increase the following distance",
    ],
    correct_answer: "Slow down and increase the following distance",
    user_answer: "Speed up and let the other vehicle move to another lane",
    is_correct: false,
  },
  {
    question_number: 23,
    question: "This helps to reduce your stress while driving.",
    options: [
      "Driving during rush hours",
      "Driving fast and arriving early",
      "Planning your trip in advance",
    ],
    correct_answer: "Planning your trip in advance",
    user_answer: "Planning your trip in advance",
    is_correct: true,
  },
  {
    question_number: 24,
    question: "How is driving at night different from driving during day time?",
    options: [
      "Pedestrians, they can easily cross the road during day time",
      "Pedestrians, especially those wearing dark clothing are difficult to see",
      "Pedestrians, they are much easier to recognize during night time",
    ],
    correct_answer:
      "Pedestrians, especially those wearing dark clothing are difficult to see",
    user_answer: "Pedestrians, they can easily cross the road during day time",
    is_correct: false,
  },
  {
    question_number: 25,
    question:
      "If a driver is weaving in and out of traffic without indicating, it is most likely due to;",
    options: [
      "Bad attitude of behavior of the driver",
      "Faulty accelerator of the car",
      "Need of the brakes to be replaced",
    ],
    correct_answer: "Bad attitude of behavior of the driver",
    user_answer: "Bad attitude of behavior of the driver",
    is_correct: true,
  },
  {
    question_number: 26,
    question:
      "A slip road on a highway is provided a good distance from the start to the end. Why?",
    options: [
      "To allow merging vehicles to accelerate and join the traffic smoothly",
      "To allow for several vehicles to stop and wait",
      "To allow for other vehicles to overtake",
    ],
    correct_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    user_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    is_correct: true,
  },
  {
    question_number: 27,
    question:
      "This action can disrupt the smooth flow of traffic and endanger other road users.",
    options: [
      "Leaving the main road by cutting in at the end of the slip road.",
      "Slowing down when inside the slip road",
      "Signaling intention before leaving slip road",
    ],
    correct_answer:
      "Leaving the main road by cutting in at the end of the slip road.",
    user_answer: "Slowing down when inside the slip road",
    is_correct: false,
  },
  {
    question_number: 28,
    question:
      "When driving near pedestrians, you may need to give way or stop if necessary. Why?",
    options: [
      "Pedestrians need to give way to other vehicles",
      "Pedestrians must know the traffic rules",
      "Pedestrians have priority",
    ],
    correct_answer: "Pedestrians have priority",
    user_answer: "Pedestrians have priority",
    is_correct: true,
  },
  {
    question_number: 29,
    question:
      "When driving near pedestrians, what should you be ready to do at any moment?",
    options: [
      "Stop using mobile phones",
      "Give way or stop if necessary",
      "Focus on your driving",
    ],
    correct_answer: "Give way or stop if necessary",
    user_answer: "Give way or stop if necessary",
    is_correct: true,
  },
  {
    question_number: 30,
    question: "When driving around school children, do not;",
    options: [
      "Give way or stop",
      "Assume they know how to behave in traffic",
      "Give safe space of at least 1.5 meter",
    ],
    correct_answer: "Assume they know how to behave in traffic",
    user_answer: "Give way or stop",
    is_correct: false,
  },
  {
    question_number: 31,
    question:
      "Driving in heavily congested traffic can be particularly dangerous. Be more safe by;",
    options: [
      "Slowing down and watching for hazards",
      "Speeding up to reach destination faster",
      "Patiently waiting at the junction",
    ],
    correct_answer: "Slowing down and watching for hazards",
    user_answer: "Slowing down and watching for hazards",
    is_correct: true,
  },
  {
    question_number: 32,
    question:
      "Staying in your lane is important. It is called lane discipline. Violation of Lane discipline in Dubai carries a fine of;",
    options: ["AED 1000.00", "AED 400.00", "AED 150.00"],
    correct_answer: "AED 1000.00",
    user_answer: "AED 400.00",
    is_correct: false,
  },
  {
    question_number: 33,
    question:
      "Your vehicle is unable to move due to mechanical problem. How can you warn other drivers?",
    options: [
      "Turn on your hazard lights or lift your bonnet",
      "Sound your horn repeatedly and loudly",
      "Turn on your right or left indicator",
    ],
    correct_answer: "Turn on your hazard lights or lift your bonnet",
    user_answer: "Turn on your hazard lights or lift your bonnet",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "If you pass a heavy truck on its right side, there is possibility that;",
    options: [
      "The truck driver may not give way",
      "The truck driver may see you easily",
      "The truck driver may not see you",
    ],
    correct_answer: "The truck driver may not see you",
    user_answer: "The truck driver may not see you",
    is_correct: true,
  },
  {
    question_number: 37,
    question: "If you need to, how would you pass a motorcycle?",
    options: [
      "Make sure to give a loud horn when passing",
      "Passing a motorcycle from the right side is fine",
      "Provide enough space as you would a car",
    ],
    correct_answer: "Provide enough space as you would a car",
    user_answer: "Passing a motorcycle from the right side is fine",
    is_correct: false,
  },
  {
    question_number: 38,
    question:
      "When driving on busy streets, be particularly alert for people trying to cross and walking from;",
    options: [
      "Behind the tall buildings",
      "Front or behind vehicles that are stopped or moving slowly.",
      "Freeway exits",
    ],
    correct_answer:
      "Front or behind vehicles that are stopped or moving slowly.",
    user_answer: "Front or behind vehicles that are stopped or moving slowly.",
    is_correct: true,
  },
  {
    question_number: 39,
    question:
      "you are driving vehicle A. Do you need to give way to other vehicles?",
    options: [
      "vehicle C only",
      "vehicle B only",
      "neither vehicle B nor vehicle C",
    ],
    correct_answer: "neither vehicle B nor vehicle C",
    user_answer: "vehicle C only",
    is_correct: false,
  },
  {
    question_number: 40,
    question:
      "If you are already inside the roundabout, how should you deal with an emergency vehicle?",
    options: [
      "Moving to the left or right without crossing the red signal.",
      "Stop then exit the roundabout and move to the right lane",
      "Keep moving, exit the roundabout and move to the right lane",
    ],
    correct_answer:
      "Keep moving, exit the roundabout and move to the right lane",
    user_answer: "Moving to the left or right without crossing the red signal.",
    is_correct: false,
  },
  {
    question_number: 41,
    question:
      "This sign indicates the presence of slow moving vehicles that are going uphill.",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "A",
    is_correct: true,
  },
  {
    question_number: 42,
    question: "Road rules are important for safety and order on the road and;",
    options: [
      "they are applicable to all road users",
      "they are applicable to all drivers",
      "they are applicable to all during rush hours",
    ],
    correct_answer: "they are applicable to all road users",
    user_answer: "they are applicable to all road users",
    is_correct: true,
  },
  {
    question_number: 43,
    question: "One possible danger when overtaking a truck on an open road is;",
    options: [
      "presence of speed cameras on the road",
      "presence of other vehicles",
      "presence of strong winds",
    ],
    correct_answer: "presence of strong winds",
    user_answer: "presence of other vehicles",
    is_correct: false,
  },
  {
    question_number: 44,
    question:
      "You are travelling on freeway and you want to exit, what should you be doing to stay safe?",
    options: [
      "slow down and change lanes",
      "check your mirrors and confirm safety",
      "check your speed",
    ],
    correct_answer: "check your mirrors and confirm safety",
    user_answer: "check your mirrors and confirm safety",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "Why is it important to stop in a safe place away from traffic if involved in a crash without injuries?",
    options: [
      "to avoid obstructing the traffic and creating a traffic jam",
      "to enable inspecting the vehicle and be able to leave immediately",
      "to avoid being blamed for the crash",
    ],
    correct_answer:
      "to avoid obstructing the traffic and creating a traffic jam",
    user_answer:
      "to enable inspecting the vehicle and be able to leave immediately",
    is_correct: false,
  },
  {
    question_number: 46,
    question:
      "Vehicle A is travelling on a main road. Vehicle B wants to join the main road. Which vehicle has the priority?",
    options: [
      "vehicle B has the priority",
      "vehicle A has the priority",
      "both vehicles have the same priority",
    ],
    correct_answer: "vehicle A has the priority",
    user_answer: "vehicle A has the priority",
    is_correct: true,
  },
  {
    question_number: 47,
    question:
      "If you are trying to report a traffic accident using the Dubai Police App, what safety message you will see on the app?",
    options: [
      "Move to safe location, do not obstruct traffic",
      "Drive Safely, everytime",
      "Buckle up, always",
    ],
    correct_answer: "Move to safe location, do not obstruct traffic",
    user_answer: "Move to safe location, do not obstruct traffic",
    is_correct: true,
  },
  {
    question_number: 48,
    question:
      "Use the Drive Mode feature of the Dubai Police App to drive smart by;",
    options: [
      "Knowing whats happening on the roads",
      "Reporting all traffic accidents",
      "Knowing the locations of all police stations",
    ],
    correct_answer: "Knowing whats happening on the roads",
    user_answer: "Knowing whats happening on the roads",
    is_correct: true,
  },
  {
    question_number: 49,
    question:
      "You are driving vehicle A. What should you do as you enter the freeway?",
    options: [
      "adjust your speed to match the freeway traffic",
      "stop",
      "slow down",
    ],
    correct_answer: "adjust your speed to match the freeway traffic",
    user_answer: "adjust your speed to match the freeway traffic",
    is_correct: true,
  },
  {
    question_number: 50,
    question: "When must you drive with lights on?",
    options: ["from sunset to sunrise", "8 pm to 5 am", "all the time"],
    correct_answer: "from sunset to sunrise",
    user_answer: "from sunset to sunrise",
    is_correct: true,
  },
  {
    question_number: 1,
    question:
      "Pedestrians are using pedestrian lights to cross the road you are turning into. When must you give way to the pedestrians?",
    options: [
      "Only when the pedestrian lights show a green walking figure",
      "Always",
      "Never",
    ],
    correct_answer:
      "Only when the pedestrian lights show a green walking figure",
    user_answer: "Always",
    is_correct: false,
  },
  {
    question_number: 2,
    question:
      "You are driving towards an intersection that has green lights and you see that traffic is blocking the intersection. What should you do?",
    options: [
      "Move into the intersection behind the vehicle in front.",
      "Move into the intersection beside the vehicle in front.",
      "Stop and wait for the intersection to clear.",
    ],
    correct_answer: "Move into the intersection behind the vehicle in front.",
    user_answer: "Stop and wait for the intersection to clear.",
    is_correct: false,
  },
  {
    question_number: 3,
    question:
      "Driving through a flooded area requires drivers to be extra cautious because",
    options: [
      "It is difficult to guess how deep the water is.",
      "It is difficult to remove moisture from the brake system.",
      "It is not easy to speed up in deep water.",
    ],
    correct_answer: "It is difficult to guess how deep the water is.",
    user_answer: "It is difficult to guess how deep the water is.",
    is_correct: true,
  },
  {
    question_number: 4,
    question: "When there is a flood, it is best to",
    options: [
      "Drive slowly and cautiously.",
      "Avoid driving through it, if at all possible.",
      "Avoid using the main highways.",
    ],
    correct_answer: "Drive slowly and cautiously.",
    user_answer: "Avoid driving through it, if at all possible.",
    is_correct: false,
  },
  {
    question_number: 5,
    question:
      "Using a mobile phone affects the focus of drivers, it shows in their",
    options: [
      "Full attention to driving.",
      "Steady hands on the steering wheel.",
      "Inconsistent driving.",
    ],
    correct_answer: "Inconsistent driving.",
    user_answer: "Inconsistent driving.",
    is_correct: true,
  },
  {
    question_number: 6,
    question: "Avoid conflict with other road users by",
    options: [
      "Giving way, even if you have the priority sometimes.",
      "Showing mistakes of other drivers.",
      "Giving way to an elderly pedestrian.",
    ],
    correct_answer: "Giving way, even if you have the priority sometimes.",
    user_answer: "Giving way, even if you have the priority sometimes.",
    is_correct: true,
  },
  {
    question_number: 7,
    question: "Hills, driveways, intersections are among the hazards when",
    options: ["Stopping", "Overtaking", "Parking"],
    correct_answer: "Stopping",
    user_answer: "Overtaking",
    is_correct: false,
  },
  {
    question_number: 8,
    question: "Driving under the influence of alcohol is punishable by",
    options: [
      "24 black points plus AED 2400.",
      "24 black points plus other fines",
      "24 black points plus fines by court.",
    ],
    correct_answer: "24 black points plus AED 2400.",
    user_answer: "24 black points plus fines by court.",
    is_correct: false,
  },
  {
    question_number: 9,
    question:
      "What is one way of telling that you are becoming more skilled as a driver?",
    options: [
      "You need less advice from your driving instructor",
      "You have lessons more often",
      "You adjust the radio while driving",
    ],
    correct_answer: "You need less advice from your driving instructor",
    user_answer: "You have lessons more often",
    is_correct: false,
  },
  {
    question_number: 10,
    question:
      "You are about to overtake when you see this sign, what should you do?",
    options: [
      "Complete the overtaking quickly",
      "Position your vehicle for a better view",
      "Delay overtaking until the intersection is passed",
    ],
    correct_answer: "Complete the overtaking quickly",
    user_answer: "Delay overtaking until the intersection is passed",
    is_correct: false,
  },
  {
    question_number: 11,
    question:
      "In case of a breakdown, where is the proper place for the warning triangle?",
    options: [
      "50m away from the car, in the direction of approaching traffic",
      "40m away from the car, in the direction of approaching traffic",
      "30m away from the car, in the direction of approaching traffic",
    ],
    correct_answer:
      "50m away from the car, in the direction of approaching traffic",
    user_answer:
      "40m away from the car, in the direction of approaching traffic",
    is_correct: false,
  },
  {
    question_number: 12,
    question:
      "Which example is usually the result of using a mobile phone while driving?",
    options: [
      "Speeding up or slowing down without reason",
      "Speeding up at all times",
      "Speeding and stopping suddenly",
    ],
    correct_answer: "Speeding up or slowing down without reason",
    user_answer: "Speeding up or slowing down without reason",
    is_correct: true,
  },
  {
    question_number: 13,
    question: "When overtaking, it is important to",
    options: [
      "Keep to your lane",
      "Maintain your speed",
      "See the oncoming traffic",
    ],
    correct_answer: "Keep to your lane",
    user_answer: "See the oncoming traffic",
    is_correct: false,
  },
  {
    question_number: 14,
    question: "You are driving vehicle A. When can you safely turn right?",
    options: [
      "When vehicle B has slowed and is starting to turn right",
      "Immediately",
      "After you have made eye contact with the driver of vehicle B",
    ],
    correct_answer: "When vehicle B has slowed and is starting to turn right",
    user_answer: "When vehicle B has slowed and is starting to turn right",
    is_correct: true,
  },
  {
    question_number: 15,
    question: "When is vehicle A permitted to overtake vehicle B?",
    options: [
      "Only when vehicle B moves to the right",
      "Never",
      "Only when the road ahead is clear",
    ],
    correct_answer: "Only when the road ahead is clear",
    user_answer: "Never",
    is_correct: false,
  },
  {
    question_number: 16,
    question: "What does this sign mean?",
    options: [
      "Intersection with an undivided road and two-way traffic ahead.",
      "Direction signs on internal roads.",
      "No overtaking.",
    ],
    correct_answer:
      "Intersection with an undivided road and two-way traffic ahead.",
    user_answer: "Direction signs on internal roads.",
    is_correct: false,
  },
  {
    question_number: 17,
    question:
      "On a high-speed road, which sign warns of the right lane closed?",
    options: ["A", "B", "C"],
    correct_answer: "B",
    user_answer: "C",
    is_correct: false,
  },
  {
    question_number: 18,
    question: "Which sign will be displayed in a triangular shape?",
    options: [
      "T - Junction Chevron.",
      "Low Flying aircraft ahead.",
      "Stop Sign.",
    ],
    correct_answer: "Low Flying aircraft ahead.",
    user_answer: "T - Junction Chevron.",
    is_correct: false,
  },
  {
    question_number: 19,
    question:
      "You observed a pedestrian raising his hand as if calling the attention of somebody. What may happen next?",
    options: [
      "A taxi dropping off passengers on the side of the road",
      "A taxi suddenly stopping in front of you",
      "A police car sounding its siren on",
    ],
    correct_answer: "A taxi dropping off passengers on the side of the road",
    user_answer: "A taxi suddenly stopping in front of you",
    is_correct: false,
  },
  {
    question_number: 20,
    question:
      "In case of a severe accident, the steering wheel can cause you a serious injury unless:",
    options: [
      "Your steering wheel is retractable",
      "You are wearing a seat belt properly",
      "You are wearing eyeglasses",
    ],
    correct_answer: "You are wearing a seat belt properly",
    user_answer: "You are wearing eyeglasses",
    is_correct: false,
  },
  {
    question_number: 21,
    question: "To properly wear a seat belt, it must not be twisted and must:",
    options: [
      "Restrain only one occupant",
      "Be used for long trips",
      "Be used in places that are congested",
    ],
    correct_answer: "Restrain only one occupant",
    user_answer: "Restrain only one occupant",
    is_correct: true,
  },
  {
    question_number: 22,
    question:
      "Poor visibility due to adverse conditions like heavy rain or fog may affect the efficiency of this safety system.",
    options: [
      "Forward Collision Mitigation",
      "Conventional Cruise Control",
      "Anti-Lock Brake System",
    ],
    correct_answer: "Forward Collision Mitigation",
    user_answer: "Forward Collision Mitigation",
    is_correct: true,
  },
  {
    question_number: 23,
    question:
      "What should you do if your vehicle drifts near or over the lane marking and this system provides an audible warning?",
    options: [
      "Cancel all safety systems",
      "Step on the brakes",
      "Steer back to the middle of the lane",
    ],
    correct_answer: "Steer back to the middle of the lane",
    user_answer: "Steer back to the middle of the lane",
    is_correct: true,
  },
  {
    question_number: 24,
    question:
      "To improve safety when driving to an unfamiliar destination, it is best to:",
    options: [
      "Rely on the street signs",
      "Plan ahead of time",
      "Use familiar roads only",
    ],
    correct_answer: "Rely on the street signs",
    user_answer: "Plan ahead of time",
    is_correct: false,
  },
  {
    question_number: 25,
    question:
      "Plan ahead if you are traveling somewhere that is not familiar to you. It helps:",
    options: [
      "In planning your trip",
      "Reduce the distraction in the car",
      "Reduce the stress of driving",
    ],
    correct_answer: "In planning your trip",
    user_answer: "Reduce the distraction in the car",
    is_correct: false,
  },
  {
    question_number: 26,
    question: "If you find yourself tailgating another vehicle, it is best to:",
    options: [
      "Sound horn and warn other drivers of your speed",
      "Speed up and let the other vehicle move to another lane",
      "Slow down and increase the following distance",
    ],
    correct_answer: "Slow down and increase the following distance",
    user_answer: "Slow down and increase the following distance",
    is_correct: true,
  },
  {
    question_number: 27,
    question:
      "Allowing for a longer gap between your vehicle and other vehicles means you:",
    options: [
      "Allow for unexpected actions of other drivers",
      "Allow more space for more passengers",
      "Allow other vehicles to pass you on the right side",
    ],
    correct_answer: "Allow for unexpected actions of other drivers",
    user_answer: "Allow for unexpected actions of other drivers",
    is_correct: true,
  },
  {
    question_number: 28,
    question:
      "How is driving at night different from driving during the daytime?",
    options: [
      "Pedestrians, they can easily cross the road during the daytime",
      "Pedestrians, especially those wearing dark clothing are difficult to see",
      "Pedestrians, they are much easier to recognize during the night time",
    ],
    correct_answer:
      "Pedestrians, especially those wearing dark clothing are difficult to see",
    user_answer:
      "Pedestrians, especially those wearing dark clothing are difficult to see",
    is_correct: true,
  },
  {
    question_number: 29,
    question:
      "UAE Traffic Law requires drivers to use vehicle lights during night time as well as during the day where the view is unclear. Why?",
    options: [
      "Roads in the UAE are best for day time use only",
      "Road users are harder to see during night time",
      "Roads in the UAE have poor lighting",
    ],
    correct_answer: "Road users are harder to see during night time",
    user_answer: "Road users are harder to see during night time",
    is_correct: true,
  },
  {
    question_number: 30,
    question:
      "If vehicle A is tailgating vehicle B, it is most likely because:",
    options: [
      "This may be due to the bad attitude of the driver",
      "The driver of vehicle A has bad driving skills",
      "The driver of vehicle B has good driving skills",
    ],
    correct_answer: "This may be due to the bad attitude of the driver",
    user_answer: "The driver of vehicle A has bad driving skills",
    is_correct: false,
  },
  {
    question_number: 31,
    question:
      "You risk being fined, jailed or your license confiscated and your vehicle impounded if:",
    options: [
      "You drive under the influence of alcohol or drugs",
      "You do not stop at a stop sign",
      "You cross a red traffic light",
    ],
    correct_answer: "You drive under the influence of alcohol or drugs",
    user_answer: "You drive under the influence of alcohol or drugs",
    is_correct: true,
  },
  {
    question_number: 32,
    question: "If you are frequently tailgating other drivers, this may:",
    options: [
      "Increase the risk of a crash",
      "Increase your safety",
      "Increase the following distance",
    ],
    correct_answer: "Increase the risk of a crash",
    user_answer: "Increase the risk of a crash",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "While merging onto the main road, some of the vehicles on the main road swerved to avoid collision. What just happened?",
    options: [
      "The driver may have started accelerating from the end of the slip road",
      "The driver stopped at the end of the slip road",
      "The driver stopped at a red signal",
    ],
    correct_answer:
      "The driver may have started accelerating from the end of the slip road",
    user_answer: "The driver stopped at the end of the slip road",
    is_correct: false,
  },
  {
    question_number: 34,
    question:
      "How do you safely exit the main road and without disturbing the flow of traffic?",
    options: [
      "Signal your intention, cut in at the end of the slip road",
      "Signal your intention, enter the slip road early",
      "Without using the indicator, enter the slip road early",
    ],
    correct_answer: "Signal your intention, enter the slip road early",
    user_answer: "Without using the indicator, enter the slip road early",
    is_correct: false,
  },
  {
    question_number: 31,
    question:
      "Experiencing a flat tire while driving at a highway speed may cause the vehicle can swerve. What should you do?",
    options: [
      "Maintain your speed",
      "Avoid rapidly steering to alleviate the issue",
      "Take your hands off the steering wheel",
    ],
    correct_answer: "Avoid rapidly steering to alleviate the issue",
    user_answer: "Take your hands off the steering wheel",
    is_correct: false,
  },
  {
    question_number: 32,
    question:
      "To ensure that your vehicle is safe to drive, it is important to regularly check the",
    options: ["External paint", "Tire pressure", "Audio system"],
    correct_answer: "Tire pressure",
    user_answer: "Tire pressure",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "Emergency stops can be dangerous to passengers as well as the vehicles involved. To stop your vehicle safely, it is best to:",
    options: [
      "Keep an adequate following distance for speed",
      "Use heavy braking to stop in the shortest time",
      "Wait for the honking from another speeding vehicle",
    ],
    correct_answer: "Keep an adequate following distance for speed",
    user_answer: "Keep an adequate following distance for speed",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "While driving on the expressway, it is dangerous to use the left lane to pass slower vehicles. Why?",
    options: [
      "The right lane is more visible than the third one",
      "The left lane is more dangerous than the right one",
      "The left lane decreases visibility",
    ],
    correct_answer: "The left lane decreases visibility",
    user_answer: "The left lane decreases visibility",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "In damp conditions, which of the following statements is correct?",
    options: [
      "Driving at the speed limit is always safe",
      "Normal speeds can be hazardous in certain situations",
      "Drivers can accelerate without concern",
    ],
    correct_answer: "Normal speeds can be hazardous in certain situations",
    user_answer: "Normal speeds can be hazardous in certain situations",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "Rain on the road can be a hazard to many drivers. To prevent accidents on wet roads, it is best to",
    options: [
      "Brake frequently to remove excess water from the road surface",
      "Drive in the tracks of the vehicle ahead",
      "Start your trip as quickly as possible",
    ],
    correct_answer: "Drive in the tracks of the vehicle ahead",
    user_answer: "Drive in the tracks of the vehicle ahead",
    is_correct: true,
  },
  {
    question_number: 37,
    question: "For safer driving, it is advisable to drive at a speed that",
    options: [
      "Is lower than the posted speed limit",
      "Allows you to reduce the risk of any incident",
      "Matches the vehicle next to you",
    ],
    correct_answer: "Allows you to reduce the risk of any incident",
    user_answer: "Matches the vehicle next to you",
    is_correct: false,
  },
  {
    question_number: 38,
    question:
      "What is the main reason why the braking distance of a vehicle can increase exponentially?",
    options: [
      "Driving at faster speeds",
      "Using ABS to brake",
      "Steering wheel alignment",
    ],
    correct_answer: "Driving at faster speeds",
    user_answer: "Steering wheel alignment",
    is_correct: false,
  },
  {
    question_number: 39,
    question: "A primary rule for driving at night is to use the",
    options: [
      "High beam lights at all times",
      "Low beam lights only",
      "Fog lights whether there is fog or not",
    ],
    correct_answer: "Low beam lights only",
    user_answer: "Low beam lights only",
    is_correct: true,
  },
  {
    question_number: 40,
    question:
      "At night, in rural and farm areas, you need to look out for animals and birds. When tasked with avoiding a collision:",
    options: [
      "Swerve to avoid the animal entirely",
      "Brake firmly, but keep control of your car",
      "Attempt to stop your vehicle as fast as you can",
    ],
    correct_answer: "Brake firmly, but keep control of your car",
    user_answer: "Swerve to avoid the animal entirely",
    is_correct: false,
  },
  {
    question_number: 41,
    question:
      "Which of the following is a key factor in determining the braking distance of your vehicle?",
    options: [
      "The condition of your brake lights",
      "The proficiency of the driver",
      "The condition of the tires",
    ],
    correct_answer: "The condition of the tires",
    user_answer: "The proficiency of the driver",
    is_correct: false,
  },
  {
    question_number: 42,
    question: "When the road becomes wet, the potential hazard is",
    options: [
      "A traffic light turning red",
      "Most other drivers are confident",
      "Visibility replicates a rainy day",
    ],
    correct_answer: "Most other drivers are confident",
    user_answer: "Most other drivers are confident",
    is_correct: true,
  },
  {
    question_number: 43,
    question:
      "Drivers must provide additional space between vehicles in case they",
    options: [
      "Intend to park on the side of the road",
      "May fear a collision or the driver may stop abruptly",
      "Want every other vehicle to see their new paint job",
    ],
    correct_answer: "May fear a collision or the driver may stop abruptly",
    user_answer: "Intend to park on the side of the road",
    is_correct: false,
  },
  {
    question_number: 44,
    question:
      "Good drivers are always patient and take enough time and space to:",
    options: [
      "Become confident drivers one day",
      "Enjoy the beauty of the road",
      "Respond to road situations",
    ],
    correct_answer: "Respond to road situations",
    user_answer: "Respond to road situations",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "Traffic signs come in different shapes and colors. An octagon shaped sign always indicates:",
    options: [
      "A traffic checkpoint ahead",
      "An upcoming hazards warning",
      "A requirement to stop",
    ],
    correct_answer: "A requirement to stop",
    user_answer: "An upcoming hazards warning",
    is_correct: false,
  },
  {
    question_number: 46,
    question:
      "Two-way main roads are divided by solid yellow lines that run along which axis?",
    options: ["Vertical axis", "Right axis", "Horizontal axis"],
    correct_answer: "Horizontal axis",
    user_answer: "Vertical axis",
    is_correct: false,
  },
  {
    question_number: 47,
    question:
      "Pedestrian crossings are important areas to pay attention to when navigating the streets. These areas can be identified by",
    options: ["Road signs", "Road breaks", "Painted lines and markings"],
    correct_answer: "Painted lines and markings",
    user_answer: "Road signs",
    is_correct: false,
  },
  {
    question_number: 48,
    question:
      "In a residential area, children may be playing in the streets. Drivers should expect children to",
    options: ["Follow road signs", "Stay in marked areas", "Appear suddenly"],
    correct_answer: "Appear suddenly",
    user_answer: "Appear suddenly",
    is_correct: true,
  },
  {
    question_number: 49,
    question:
      "As a responsible driver, it is important to avoid playing loud music in your car to prevent",
    options: [
      "Breaking any noise pollution laws",
      "Causing hearing damage in passengers",
      "Distracting your neighbors",
    ],
    correct_answer: "Breaking any noise pollution laws",
    user_answer: "Causing hearing damage in passengers",
    is_correct: false,
  },
  {
    question_number: 50,
    question:
      "There are different forms of traffic signs. When you see a triangle shaped sign, it depicts",
    options: ["Regulatory signs", "Warning signs", "Informational signs"],
    correct_answer: "Warning signs",
    user_answer: "Informational signs",
    is_correct: false,
  },
  {
    question_number: 1,
    question:
      "Foggy driving conditions call for change in driving style, it maybe",
    options: [
      "To slow down to 40 kph only.",
      "To remain in one lane only throughout the journey.",
      "To reduce distractions inside the car.",
    ],
    correct_answer: "To reduce distractions inside the car.",
    user_answer: "To remain in one lane only throughout the journey.",
    is_correct: false,
  },
  {
    question_number: 2,
    question: "Driving in flood is difficult because",
    options: [
      "flooding reduces the visibility.",
      "flood is very unpredictable.",
      "you cannot see if there are deep holes along the path.",
    ],
    correct_answer: "you cannot see if there are deep holes along the path.",
    user_answer: "you cannot see if there are deep holes along the path.",
    is_correct: true,
  },
  {
    question_number: 3,
    question: "Mobile phones distract drivers and cause them to",
    options: [
      "change direction suddenly.",
      "maintain focus on the road",
      "use other routes",
    ],
    correct_answer: "change direction suddenly.",
    user_answer: "maintain focus on the road",
    is_correct: false,
  },
  {
    question_number: 4,
    question: "Using mobile phones while driving,",
    options: [
      "increases the chances of having collision",
      "decreases the chances of having collision",
      "improves the chances of arriving safely",
    ],
    correct_answer: "increases the chances of having collision",
    user_answer: "increases the chances of having collision",
    is_correct: true,
  },
  {
    question_number: 5,
    question: "When driving, avoid this kind of behavior",
    options: [
      "Maintaining safe gap.",
      "Driving too close to the vehicle in front.",
      "Keeping to the slow lane.",
    ],
    correct_answer: "Driving too close to the vehicle in front.",
    user_answer: "Driving too close to the vehicle in front.",
    is_correct: true,
  },
  {
    question_number: 6,
    question: "Driving slowly on the fast lane is",
    options: [
      "equally dangerous as over speeding.",
      "a normal and acceptable driving.",
      "a sure and safe way to drive.",
    ],
    correct_answer: "equally dangerous as over speeding.",
    user_answer: "equally dangerous as over speeding.",
    is_correct: true,
  },
  {
    question_number: 7,
    question:
      "Vehicle A is about to collide with the biker, what was the reason?",
    options: [
      "vehicle A was going too fast",
      "the biker did not obey the traffic rule",
      "vehicle A did not obey the traffic rule",
    ],
    correct_answer: "vehicle A did not obey the traffic rule",
    user_answer: "vehicle A did not obey the traffic rule",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "Avoid conflict with other road users by",
    options: [
      "Giving way, even if you have the priority sometimes.",
      "Showing mistakes of other drivers.",
      "Giving way to elderly pedestrian.",
    ],
    correct_answer: "Giving way, even if you have the priority sometimes.",
    user_answer: "Giving way, even if you have the priority sometimes.",
    is_correct: true,
  },
  {
    question_number: 9,
    question:
      "Looking at the diagram, if vehicle A stops now, vehicle B may crash into it. How could the risk of a crash like this be avoided",
    options: [
      "Both vehicles need to travel at a speed that will allow them to stop safely at an intersection.",
      "Vehicle A speeds up to cross the intersection on the orange light.",
      "Vehicle B overtakes vehicle A before the intersection.",
    ],
    correct_answer:
      "Both vehicles need to travel at a speed that will allow them to stop safely at an intersection.",
    user_answer:
      "Both vehicles need to travel at a speed that will allow them to stop safely at an intersection.",
    is_correct: true,
  },
  {
    question_number: 10,
    question: "Proper use of indicators will",
    options: [
      "Let other road users recognize you",
      "Let other road users know your intention",
      "Let other drivers follow",
    ],
    correct_answer: "Let other road users know your intention",
    user_answer: "Let other road users know your intention",
    is_correct: true,
  },
  {
    question_number: 11,
    question: "Series of raised lines painted across the road, know as",
    options: ["Speed Humps", "Rumble Strips", "Broken yellow Lines"],
    correct_answer: "Rumble Strips",
    user_answer: "Rumble Strips",
    is_correct: true,
  },
  {
    question_number: 12,
    question: "When overtaking, it is important to",
    options: [
      "keep to your lane",
      "maintain your speed",
      "see the oncoming traffic",
    ],
    correct_answer: "see the oncoming traffic",
    user_answer: "see the oncoming traffic",
    is_correct: true,
  },
  {
    question_number: 13,
    question: "In which of the following areas is overtaking not allowed?",
    options: [
      "Intersections and roundabouts",
      "Open roads and highways",
      "Two-way and one way roads",
    ],
    correct_answer: "Intersections and roundabouts",
    user_answer: "Intersections and roundabouts",
    is_correct: true,
  },
  {
    question_number: 14,
    question: "What could be the reason why this collision occurred?",
    options: [
      "both vehicles did not obey the traffic rule",
      "vehicle B did not obey the traffic rule",
      "vehicle A did not obey the traffic rule",
    ],
    correct_answer: "vehicle A did not obey the traffic rule",
    user_answer: "vehicle A did not obey the traffic rule",
    is_correct: true,
  },
  {
    question_number: 15,
    question:
      "Which of the signs mean two-way traffic will cross your route ahead?",
    options: ["A", "B", "C"],
    correct_answer: "B",
    user_answer: "A",
    is_correct: false,
  },
  {
    question_number: 16,
    question: "What is the main factor that helps you to be a better driver?",
    options: [
      "Being confident",
      "undertaking as many lessons as possible",
      "Being confident Tracking difficult driving situations when you are a new driver",
    ],
    correct_answer: "undertaking as many lessons as possible",
    user_answer: "undertaking as many lessons as possible",
    is_correct: true,
  },
  {
    question_number: 17,
    question: "When is vehicle A permitted to overtake vehicle B?",
    options: [
      "only when vehicle B moves to the right",
      "never",
      "only when the road ahead is clear",
    ],
    correct_answer: "only when the road ahead is clear",
    user_answer: "never",
    is_correct: false,
  },
  {
    question_number: 18,
    question: "This sign means stop. Which category does this sign belong to?",
    options: ["Mandatory Signs", "Control Signs", "Prohibitory Signs"],
    correct_answer: "Control Signs",
    user_answer: "Control Signs",
    is_correct: true,
  },
  {
    question_number: 19,
    question: "As a driver, how do you help keep your passengers safe?",
    options: [
      "Make sure the car seats are available",
      "Make sure all sides of the vehicle have airbags",
      "Ensure all your passengers are wearing seat belt",
    ],
    correct_answer: "Ensure all your passengers are wearing seat belt",
    user_answer: "Ensure all your passengers are wearing seat belt",
    is_correct: true,
  },
  {
    question_number: 20,
    question:
      "The parking Assistance System enables the car park on its own. During the parking maneuver, the driver should;",
    options: [
      "Monitor the safety of the maneuver and the environment and intervene if required",
      "Relax and leave the parking maneuver to the system",
      "Assist the system by controlling the steering and the brake pedal",
    ],
    correct_answer:
      "Monitor the safety of the maneuver and the environment and intervene if required",
    user_answer:
      "Monitor the safety of the maneuver and the environment and intervene if required",
    is_correct: true,
  },
  {
    question_number: 21,
    question:
      "The Lane Support Systems typically starts to engage at speeds above:",
    options: ["40 KPH", "50 KPH", "60 KPH"],
    correct_answer: "50 KPH",
    user_answer: "60 KPH",
    is_correct: false,
  },
  {
    question_number: 22,
    question:
      "To improve safety when driving to an unfamiliar destination, it is best to;",
    options: [
      "Rely on the street signs",
      "Plan ahead of time",
      "Use the familiar roads only",
    ],
    correct_answer: "Plan ahead of time",
    user_answer: "Plan ahead of time",
    is_correct: true,
  },
  {
    question_number: 23,
    question: "When you are tail gating another vehicle, it means;",
    options: [
      "You are driving with safe following distance",
      "You are driving too close to the vehicle in front",
      "You are observing all around safety cushion",
    ],
    correct_answer: "You are driving too close to the vehicle in front",
    user_answer: "You are driving too close to the vehicle in front",
    is_correct: true,
  },
  {
    question_number: 24,
    question: "When driving at night, it is difficult to judge the speed and;",
    options: ["Distance of objects", "Weight of objects", "Carrying capacity"],
    correct_answer: "Distance of objects",
    user_answer: "Distance of objects",
    is_correct: true,
  },
  {
    question_number: 25,
    question:
      "What is the main reason for driving more slowly during night time?",
    options: [
      "Pedestrians are harder to see, especially those wearing dark clothing",
      "It is harder to see during sundown",
      "It is harder to see the lines on the road",
    ],
    correct_answer:
      "Pedestrians are harder to see, especially those wearing dark clothing",
    user_answer:
      "Pedestrians are harder to see, especially those wearing dark clothing",
    is_correct: true,
  },
  {
    question_number: 26,
    question: "When driving into a bend, what hazards should you look out for?",
    options: [
      "Hazard markers, lane markings",
      "Spilled oil, lane markings, stop sign",
      "Spilled oil, sand, leaves",
    ],
    correct_answer: "Spilled oil, sand, leaves",
    user_answer: "Hazard markers, lane markings",
    is_correct: false,
  },
  {
    question_number: 27,
    question:
      "The diagram shows a drivers blind spot. What can you do about blind spots when you drive?",
    options: [
      "Set up your rear view mirrors so there are no blind spots.",
      "Know where your blind spots are and do a headcheck regularly.",
      "Have your eyesight checked regularly.",
    ],
    correct_answer:
      "Know where your blind spots are and do a headcheck regularly.",
    user_answer:
      "Know where your blind spots are and do a headcheck regularly.",
    is_correct: true,
  },
  {
    question_number: 28,
    question:
      "You risk being fined, jailed or your license confiscated and your vehicle impounded if;",
    options: [
      "You drive under the influence of alcohol or drugs",
      "You do not stop at a stop sign",
      "You cross a red traffic light",
    ],
    correct_answer: "You drive under the influence of alcohol or drugs",
    user_answer: "You drive under the influence of alcohol or drugs",
    is_correct: true,
  },
  {
    question_number: 29,
    question: "If you are frequently tailgating other drivers, this may;",
    options: [
      "Increase the risk of a crash",
      "Increase your safety",
      "Increase the following distance",
    ],
    correct_answer: "Increase the risk of a crash",
    user_answer: "Increase the risk of a crash",
    is_correct: true,
  },
  {
    question_number: 30,
    question:
      "There is zero tolerance for drink driving in Dubai. You risk being;",
    options: [
      "Fined, jailed or your license confiscated",
      "Issued a speeding ticket",
      "Issued an illegal ticket",
    ],
    correct_answer: "Fined, jailed or your license confiscated",
    user_answer: "Fined, jailed or your license confiscated",
    is_correct: true,
  },
  {
    question_number: 31,
    question:
      "A slip road on a highway is provided a good distance from the start to the end. Why?",
    options: [
      "To allow merging vehicles to accelerate and join the traffic smoothly",
      "To allow for several vehicles to stop and wait",
      "To allow for other vehicles to overtake",
    ],
    correct_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    user_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    is_correct: true,
  },
  {
    question_number: 32,
    question:
      "While merging onto the main road, some of the vehicles on the main road swerved to avoid collision. What just happened?",
    options: [
      "The driver may have started accelerating from the end of the slip road",
      "The driver stopped at the end of the slip road",
      "The driver stopped at a red signal",
    ],
    correct_answer:
      "The driver may have started accelerating from the end of the slip road",
    user_answer: "The driver stopped at the end of the slip road",
    is_correct: false,
  },
  {
    question_number: 33,
    question:
      "You are driving on a highway and you just missed your exit. What is the safest action?",
    options: [
      "Switch on hazard lights and stop",
      "Stop, reverse and enter the slip road",
      "Move on and take the next exit",
    ],
    correct_answer: "Move on and take the next exit",
    user_answer: "Move on and take the next exit",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "Due to their size, school children are most vulnerable in case of colliding with a vehicle. How?",
    options: [
      "The upper part of their body will come in contact with the vehicle which can be fatal",
      "They may be moving inside the school bus",
      "School children have priority",
    ],
    correct_answer:
      "The upper part of their body will come in contact with the vehicle which can be fatal",
    user_answer:
      "The upper part of their body will come in contact with the vehicle which can be fatal",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "Driving in heavily congested traffic can be particularly dangerous. Be more safe by;",
    options: [
      "Slowing down and watching for hazards",
      "Speeding up to reach destination faster",
      "Patiently waiting at the junction",
    ],
    correct_answer: "Slowing down and watching for hazards",
    user_answer: "Slowing down and watching for hazards",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "Driving near or along side a school bus, why should you give due consideration to the school bus driver?",
    options: [
      "To avoid any sudden actions that can startle the school bus driver",
      "So that school bus drivers are given priority",
      "So that school bus drivers can reach home early",
    ],
    correct_answer:
      "To avoid any sudden actions that can startle the school bus driver",
    user_answer: "So that school bus drivers are given priority",
    is_correct: false,
  },
  {
    question_number: 37,
    question:
      "Staying in your lane is important. It is called lane discipline. Violation of Lane discipline in Dubai carries a fine of;",
    options: ["AED 1000.00", "AED 400.00", "AED 150.00"],
    correct_answer: "AED 400.00",
    user_answer: "AED 400.00",
    is_correct: true,
  },
  {
    question_number: 38,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 39,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 40,
    question:
      "As a pedestrian, what should you do if you see or hear an emergency vehicle?",
    options: [
      "You can quickly cross the pedestrian crossing",
      "You can slowly walk across the pedestrian crossing",
      "Do not use the pedestrian crossing",
    ],
    correct_answer: "Do not use the pedestrian crossing",
    user_answer: "Do not use the pedestrian crossing",
    is_correct: true,
  },
  {
    question_number: 41,
    question:
      "If the vehicle you are driving exceeds 10 tonnes in weight, you are;",
    options: [
      "Allowed to enter this road",
      "Not allowed to enter this road",
      "Not allowed to park here",
    ],
    correct_answer: "Not allowed to enter this road",
    user_answer: "Not allowed to enter this road",
    is_correct: true,
  },
  {
    question_number: 42,
    question:
      "UAE Traffic law requires that while approaching a pedestrian crossing, you must;",
    options: [
      "Slow down or stop if necessary",
      "Use hazard lights properly",
      "Use indicators properly",
    ],
    correct_answer: "Slow down or stop if necessary",
    user_answer: "Slow down or stop if necessary",
    is_correct: true,
  },
  {
    question_number: 43,
    question: "In case of collision, those involved must find;",
    options: [
      "an exit road as quickly as possible",
      "a reliable witness to the incident immediately",
      "a safest place immediately",
    ],
    correct_answer: "a safest place immediately",
    user_answer: "a safest place immediately",
    is_correct: true,
  },
  {
    question_number: 44,
    question:
      "After a collision a motorcyclist wearing a helmet was injured, what is the best thing to do?",
    options: [
      "attempt to remove the helmet as quickly as possible",
      "do not attempt to remove the helmet",
      "attempt to move the motorcyclist to another place",
    ],
    correct_answer: "do not attempt to remove the helmet",
    user_answer: "attempt to move the motorcyclist to another place",
    is_correct: false,
  },
  {
    question_number: 45,
    question:
      "If a vehicle involved in accident is damaged, repairs will not be carried out if;",
    options: [
      "a police report comes in white form",
      "a police report comes in red form",
      "no police report is presented during the time of repairs.",
    ],
    correct_answer: "no police report is presented during the time of repairs.",
    user_answer: "a police report comes in red form",
    is_correct: false,
  },
  {
    question_number: 46,
    question:
      "To inquire about traffic fines using the Dubai Police App, you may use the plate number, TC number, license and;",
    options: ["Vehicle ID Number (VIN)", "Ticket number", "Makani number"],
    correct_answer: "Ticket number",
    user_answer: "Ticket number",
    is_correct: true,
  },
  {
    question_number: 47,
    question: "Which vehicle must give way?",
    options: [
      "the vehicle that gets to the intersection last",
      "vehicle A",
      "vehicle B",
    ],
    correct_answer: "vehicle B",
    user_answer: "vehicle B",
    is_correct: true,
  },
  {
    question_number: 48,
    question:
      "You are the driver of vehicle A. You are parked and about to enter the stream of traffic. You must give way to",
    options: [
      "vehicle B only",
      "the bike rider only",
      "both the bike rider and vehicle B",
    ],
    correct_answer: "both the bike rider and vehicle B",
    user_answer: "both the bike rider and vehicle B",
    is_correct: true,
  },
  {
    question_number: 49,
    question:
      "You are driving vehicle A. What is difficult to judge when you want to overtake?",
    options: [
      "the speed of vehicle C",
      "the speed of vehicle B",
      "the speed you are doing",
    ],
    correct_answer: "the speed of vehicle C",
    user_answer: "the speed of vehicle C",
    is_correct: true,
  },
  {
    question_number: 50,
    question:
      "You are driving car A. What does this diagram say about following distance?",
    options: [
      "in good driving conditions there should be about a one second gap between you and the car in front",
      "in good driving conditions there should be at least a two second gap between you and the car in front",
      "there is no parking allowed",
    ],
    correct_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    user_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    is_correct: true,
  },
  {
    question_number: 1,
    question: "At what speed should you travel on the road?",
    options: [
      "At a speed shown on the speed limit signs",
      "At least 10 km/h below the speed limit signs.",
      "At a speed shown on a speed limit signs or slower, depending on the road conditions.",
    ],
    correct_answer:
      "At a speed shown on a speed limit signs or slower, depending on the road conditions.",
    user_answer: "At a speed shown on the speed limit signs",
    is_correct: false,
  },
  {
    question_number: 2,
    question:
      "Just before you enter an intersection the traffic signal turns red.What should you do?",
    options: [
      "Slow down and check for vehicles on your left before you cross.",
      "Accelerate to get across the intersection quickly.",
      "Stop.",
    ],
    correct_answer: "Stop.",
    user_answer: "Stop.",
    is_correct: true,
  },
  {
    question_number: 3,
    question:
      "Driving through flooded area require drivers to be extra cautious because",
    options: [
      "It is difficult to guess how deep the water is.",
      "It is difficult to remove moisture from the brake system",
      "It is not easy to speed up in deep water.",
    ],
    correct_answer: "It is difficult to guess how deep the water is.",
    user_answer: "It is difficult to guess how deep the water is.",
    is_correct: true,
  },
  {
    question_number: 4,
    question:
      "After passing through flood, it is best to have your car checked because,",
    options: [
      "The cars sensitive electronics may malfunction.",
      "The car navigation system may malfunction.",
      "Most modern cars cannot be driven through flood.",
    ],
    correct_answer: "The cars sensitive electronics may malfunction.",
    user_answer: "The cars sensitive electronics may malfunction.",
    is_correct: true,
  },
  {
    question_number: 5,
    question: "Drivers using mobile phones",
    options: [
      "Commit same mistakes again and again.",
      "Commit mistakes in judgment.",
      "Commit several violations.",
    ],
    correct_answer: "Commit mistakes in judgment.",
    user_answer: "Commit several violations.",
    is_correct: false,
  },
  {
    question_number: 6,
    question: "The best way to deal with drivers signaling to turn is",
    options: [
      "To intentionally push in",
      "To intentionally block their path.",
      "To give way and allow to turn",
    ],
    correct_answer: "To give way and allow to turn",
    user_answer: "To give way and allow to turn",
    is_correct: true,
  },
  {
    question_number: 7,
    question: "Allowing extra travel time",
    options: [
      "will enable enjoying the route.",
      "is a tough choice.",
      "is one of good driving practices.",
    ],
    correct_answer: "is one of good driving practices.",
    user_answer: "is one of good driving practices.",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "Driving at your best condition means",
    options: [
      "not driving when sleepy or tired.",
      "choosing the best routes.",
      "not driving when in doubt of way.",
    ],
    correct_answer: "not driving when sleepy or tired.",
    user_answer: "choosing the best routes.",
    is_correct: false,
  },
  {
    question_number: 9,
    question: "After making the turn with the indicator on,",
    options: [
      "Indicator will always turn off by itself.",
      "Check that it is turned off.",
      "Indicator can be left on.",
    ],
    correct_answer: "Check that it is turned off.",
    user_answer: "Check that it is turned off.",
    is_correct: true,
  },
  {
    question_number: 10,
    question: "When parking your vehicle, it is important to ensure that",
    options: [
      "your vehicle is in good running condition and is fully locked",
      "your vehicle does not in anyway block other traffic users",
      "you stop and leave as quickly as possible",
    ],
    correct_answer: "your vehicle does not in anyway block other traffic users",
    user_answer: "your vehicle does not in anyway block other traffic users",
    is_correct: true,
  },
  {
    question_number: 11,
    question: "This sign indicates the area where",
    options: [
      "Vehicles can park",
      "Police cars park",
      "Parking directory is available",
    ],
    correct_answer: "Vehicles can park",
    user_answer: "Vehicles can park",
    is_correct: true,
  },
  {
    question_number: 12,
    question: "Major junctions have diagonal yellow lines. Why?",
    options: [
      "To prevent junction from being blocked",
      "To improve visibility of road markings",
      "To stop speeding drivers",
    ],
    correct_answer: "To prevent junction from being blocked",
    user_answer: "To prevent junction from being blocked",
    is_correct: true,
  },
  {
    question_number: 13,
    question: "Drivers must use of indicators appropriately while driving",
    options: [
      "This is required by the UAE traffic law",
      "This is not required by the UAE traffic law",
      "This is required by the transport industry",
    ],
    correct_answer: "This is required by the UAE traffic law",
    user_answer: "This is required by the UAE traffic law",
    is_correct: true,
  },
  {
    question_number: 14,
    question: "What could be the reason why this collision occurred?",
    options: [
      "both vehicles did not obey the traffic rule",
      "vehicle B did not obey the traffic rule",
      "vehicle A did not obey the traffic rule",
    ],
    correct_answer: "vehicle A did not obey the traffic rule",
    user_answer: "vehicle A did not obey the traffic rule",
    is_correct: true,
  },
  {
    question_number: 15,
    question: "This sign means must keep to the left",
    options: ["A", "B", "C"],
    correct_answer: "C",
    user_answer: "C",
    is_correct: true,
  },
  {
    question_number: 16,
    question: "Driving when tired can cause you to sleep at the wheel and",
    options: [
      "can result to crashes",
      "can result to loss of focus",
      "can result to loss of steering wheel",
    ],
    correct_answer: "can result to crashes",
    user_answer: "can result to crashes",
    is_correct: true,
  },
  {
    question_number: 17,
    question: "When coming to a green traffic light you should:",
    options: [
      "continue ahead but be ready to stop if you have to.",
      "increase your speed.",
      "use low speed lane.",
    ],
    correct_answer: "continue ahead but be ready to stop if you have to.",
    user_answer: "continue ahead but be ready to stop if you have to.",
    is_correct: true,
  },
  {
    question_number: 18,
    question: "One of these signs mean the beginning of freeway.",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "A",
    is_correct: true,
  },
  {
    question_number: 19,
    question:
      "In order to avoid hazards on the road, it is required for the driver to;",
    options: [
      "Have the skills to forecast what may happen",
      "Have the patience to stay in the queue at all times",
      "Have the ability to operate the vehicle skillfully",
    ],
    correct_answer: "Have the skills to forecast what may happen",
    user_answer: "Have the skills to forecast what may happen",
    is_correct: true,
  },
  {
    question_number: 20,
    question: "When driving, it is important to be aware of yourself. Why?",
    options: [
      "Because your physical and mental condition affects your driving",
      "Because driving mostly involves mental activity",
      "Because driving mostly involves physical activity",
    ],
    correct_answer:
      "Because your physical and mental condition affects your driving",
    user_answer:
      "Because your physical and mental condition affects your driving",
    is_correct: true,
  },
  {
    question_number: 21,
    question: "One of many ways to ensure your child rides your car safely is;",
    options: [
      "Use the best safety restraint for your child’s size.",
      "Use the adult seat belt for your child",
      "Holding the child firmly on your lap",
    ],
    correct_answer: "Use the best safety restraint for your child’s size.",
    user_answer: "Use the best safety restraint for your child’s size.",
    is_correct: true,
  },
  {
    question_number: 22,
    question:
      "If you want your vehicle to travel in a constant speed, you may use this safety system;",
    options: [
      "Intelligent Speed Assistance",
      "Anti-Lock brake System",
      "Conventional Cruise Control",
    ],
    correct_answer: "Conventional Cruise Control",
    user_answer: "Intelligent Speed Assistance",
    is_correct: false,
  },
  {
    question_number: 23,
    question:
      "This safety system improves the stability of the vehicle by detecting and reducing the loss of traction.",
    options: [
      "Electronic Stability Program",
      "Anti-Lock Brake System",
      "Adaptive Cruise Control",
    ],
    correct_answer: "Electronic Stability Program",
    user_answer: "Electronic Stability Program",
    is_correct: true,
  },
  {
    question_number: 24,
    question:
      "The parking Assistance System enables the car park on its own. During the parking maneuver, the driver should;",
    options: [
      "Monitor the safety of the maneuver and the environment and intervene if required",
      "Relax and leave the parking maneuver to the system",
      "Assist the system by controlling the steering and the brake pedal",
    ],
    correct_answer:
      "Monitor the safety of the maneuver and the environment and intervene if required",
    user_answer:
      "Monitor the safety of the maneuver and the environment and intervene if required",
    is_correct: true,
  },
  {
    question_number: 25,
    question:
      "Plan ahead if you are travelling somewhere that is not familiar to you. It helps;",
    options: [
      "In planning your trip",
      "Reduce the distraction in the car",
      "Reduce the stress of driving",
    ],
    correct_answer: "Reduce the stress of driving",
    user_answer: "Reduce the stress of driving",
    is_correct: true,
  },
  {
    question_number: 26,
    question:
      "Allowing for longer gap between your vehicle and other vehicles mean you;",
    options: [
      "Allow for unexpected actions of other drivers",
      "Allow more space for more passengers",
      "Allow other vehicles to pass you on the right side",
    ],
    correct_answer: "Allow for unexpected actions of other drivers",
    user_answer: "Allow for unexpected actions of other drivers",
    is_correct: true,
  },
  {
    question_number: 27,
    question: "This helps to reduce your stress while driving.",
    options: [
      "Driving during rush hours",
      "Driving fast and arriving early",
      "Planning your trip in advance",
    ],
    correct_answer: "Planning your trip in advance",
    user_answer: "Planning your trip in advance",
    is_correct: true,
  },
  {
    question_number: 28,
    question: "When driving at night, it is difficult to judge the speed and;",
    options: ["Distance of objects", "Weight of objects", "Carrying capacity"],
    correct_answer: "Distance of objects",
    user_answer: "Distance of objects",
    is_correct: true,
  },
  {
    question_number: 29,
    question:
      "Because they are difficult to see, be extra careful while driving at night for;",
    options: [
      "Public transport buses",
      "Motorcyclists and cyclists with their headlights on",
      "Motorcyclists and cyclists that are not using their headlights",
    ],
    correct_answer:
      "Motorcyclists and cyclists that are not using their headlights",
    user_answer:
      "Motorcyclists and cyclists that are not using their headlights",
    is_correct: true,
  },
  {
    question_number: 30,
    question:
      "What is one way of telling that you are becoming more skilled as a driver?",
    options: [
      "You make correct decisions before your driver instructor tells you what to do.",
      "You get annoyed with other drivers when they make a mistake.",
      "You move off more quickly from stop signs.",
    ],
    correct_answer:
      "You make correct decisions before your driver instructor tells you what to do.",
    user_answer:
      "You make correct decisions before your driver instructor tells you what to do.",
    is_correct: true,
  },
  {
    question_number: 31,
    question:
      "You drive and stop at an intersection that has a red traffic light. Can you use a mobile phone while you wait for a change of lights?",
    options: [
      "Yes",
      "No",
      "Yes, but you must stop using the phone when the light turns green.",
    ],
    correct_answer: "No",
    user_answer: "No",
    is_correct: true,
  },
  {
    question_number: 32,
    question: "If you find that you have less time to react, it means you;",
    options: [
      "Need to reduce your speed",
      "Need to increase your speed",
      "Need to drive less",
    ],
    correct_answer: "Need to reduce your speed",
    user_answer: "Need to reduce your speed",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "It is not safe to use a mobile phone while driving (even with hands-free kit) because;",
    options: [
      "This helps the driver focus more on the driving task",
      "This reduces the driver’s concentration from the driving task",
      "It helps you stay in control of yourself",
    ],
    correct_answer:
      "This reduces the driver’s concentration from the driving task",
    user_answer:
      "This reduces the driver’s concentration from the driving task",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "What can happen if you start accelerating at the end of the slip road?",
    options: [
      "The traffic flow will flow freely",
      "You may disrupt the flow of traffic",
      "The traffic flow will not be affected",
    ],
    correct_answer: "You may disrupt the flow of traffic",
    user_answer: "You may disrupt the flow of traffic",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "This action can disrupt the smooth flow of traffic and endanger other road users.",
    options: [
      "Leaving the main road by cutting in at the end of the slip road.",
      "Slowing down when inside the slip road",
      "Signaling intention before leaving slip road",
    ],
    correct_answer:
      "Leaving the main road by cutting in at the end of the slip road.",
    user_answer:
      "Leaving the main road by cutting in at the end of the slip road.",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "You are driving on a highway and you just missed your exit. What is the safest action?",
    options: [
      "Switch on hazard lights and stop",
      "Stop, reverse and enter the slip road",
      "Move on and take the next exit",
    ],
    correct_answer: "Move on and take the next exit",
    user_answer: "Move on and take the next exit",
    is_correct: true,
  },
  {
    question_number: 37,
    question:
      "To ensure safety when dealing with pedestrians, it is best not to;",
    options: [
      "Remember the pedestrian have the priority",
      "Assume the pedestrian has seen you",
      "Slow down and give way",
    ],
    correct_answer: "Assume the pedestrian has seen you",
    user_answer: "Remember the pedestrian have the priority",
    is_correct: false,
  },
  {
    question_number: 38,
    question:
      "How can throwing any debris or garbage on the road be dangerous?",
    options: [
      "Some road users may react in an unpredictable manner",
      "Large vehicles are not affected by debris",
      "Some vehicles are turning right",
    ],
    correct_answer: "Some road users may react in an unpredictable manner",
    user_answer: "Large vehicles are not affected by debris",
    is_correct: false,
  },
  {
    question_number: 39,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 40,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 41,
    question:
      "As a sensible and responsible driver on the road, avoid doing this to truck drivers.",
    options: [
      "Blasting your horn with intention to force the driver to drive faster",
      "Consider the driver’s condition who could be tired due to long working hours",
      "Keep a longer following distance when driving or stopping behind them.",
    ],
    correct_answer:
      "Blasting your horn with intention to force the driver to drive faster",
    user_answer:
      "Blasting your horn with intention to force the driver to drive faster",
    is_correct: true,
  },
  {
    question_number: 42,
    question:
      "Just before entering a round about, an emergency vehicle approaches. What should you do?",
    options: [
      "Enter the roundabout slowly",
      "Do not follow emergency vehicles",
      "Allow the emergency vehicle to exit the roundabout",
    ],
    correct_answer: "Allow the emergency vehicle to exit the roundabout",
    user_answer: "Allow the emergency vehicle to exit the roundabout",
    is_correct: true,
  },
  {
    question_number: 43,
    question: "When giving way to emergency vehicles, it is;",
    options: [
      "Fine to cross the red signal",
      "Acceptable to use the road shoulders",
      "Not allowed to use the road shoulders",
    ],
    correct_answer: "Not allowed to use the road shoulders",
    user_answer: "Acceptable to use the road shoulders",
    is_correct: false,
  },
  {
    question_number: 44,
    question:
      "In the event of a collision, the color of the accident report means following;",
    options: [
      "pink is issued to the driver at fault",
      "green is issued to the driver at fault",
      "white is issued to the driver at fault",
    ],
    correct_answer: "pink is issued to the driver at fault",
    user_answer: "pink is issued to the driver at fault",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "If you are trying to report a traffic accident using the Dubai Police App, what safety message you will see on the app?",
    options: [
      "Move to safe location, do not obstruct traffic",
      "Drive Safely, everytime",
      "Buckle up, always",
    ],
    correct_answer: "Move to safe location, do not obstruct traffic",
    user_answer: "Move to safe location, do not obstruct traffic",
    is_correct: true,
  },
  {
    question_number: 46,
    question:
      "What type of traffic accident can you report using the Dubai Police App?",
    options: ["Injury accidents", "Major accidents", "Minor accidents"],
    correct_answer: "Minor accidents",
    user_answer: "Minor accidents",
    is_correct: true,
  },
  {
    question_number: 47,
    question: "Which vehicle must give way?",
    options: [
      "the vehicle that gets to the intersection last",
      "vehicle A",
      "vehicle B",
    ],
    correct_answer: "vehicle B",
    user_answer: "the vehicle that gets to the intersection last",
    is_correct: false,
  },
  {
    question_number: 48,
    question: "Which vehicle must give way?",
    options: [
      "the vehicle that gets to the intersection last",
      "vehicle A",
      "vehicle B",
    ],
    correct_answer: "vehicle B",
    user_answer: "vehicle B",
    is_correct: true,
  },
  {
    question_number: 49,
    question: "Which vehicle is taking the safest path?",
    options: ["vehicle B", "vehicle A", "vehicle C"],
    correct_answer: "vehicle A",
    user_answer: "vehicle A",
    is_correct: true,
  },
  {
    question_number: 50,
    question: "Placing the baby car seat at the rear seat is safer because",
    options: [
      "front passenger airbag may deploy and injure the baby",
      "rear seat have better hold than the front seat",
      "front seats are actually designed for adult passengers only",
    ],
    correct_answer: "front passenger airbag may deploy and injure the baby",
    user_answer: "front passenger airbag may deploy and injure the baby",
    is_correct: true,
  },
  {
    question_number: 1,
    question:
      "You will be a safer driver if you drive just a little bit slower because",
    options: [
      "you will have time to look at the scenery",
      "you gain more experience by driving slowly",
      "You can respond to hazards by slowing down quicker",
    ],
    correct_answer: "You can respond to hazards by slowing down quicker",
    user_answer: "you will have time to look at the scenery",
    is_correct: false,
  },
  {
    question_number: 2,
    question: "If visibility is reduced by fog,",
    options: [
      "You must switch on your hazard lights",
      "Be patient and avoid passing or crossing traffic.",
      "Maintain your speed",
    ],
    correct_answer: "Be patient and avoid passing or crossing traffic.",
    user_answer: "You must switch on your hazard lights",
    is_correct: false,
  },
  {
    question_number: 3,
    question: "If the fog is too dense to continue, it is best to",
    options: [
      "Keep driving with the high beam lights on.",
      "Pull off the road and position away from traffic",
      "Keep driving with the low beam lights on.",
    ],
    correct_answer: "Pull off the road and position away from traffic",
    user_answer: "Keep driving with the high beam lights on.",
    is_correct: false,
  },
  {
    question_number: 4,
    question: "Drivers using mobile phones tend to",
    options: [
      "have difficulty staying in the lane",
      "look confused",
      "cause others to violate rules.",
    ],
    correct_answer: "have difficulty staying in the lane",
    user_answer: "cause others to violate rules.",
    is_correct: false,
  },
  {
    question_number: 5,
    question: "When driving, avoid this kind of behavior",
    options: [
      "Maintaining safe gap.",
      "Driving too close to the vehicle in front.",
      "Keeping to the slow lane.",
    ],
    correct_answer: "Driving too close to the vehicle in front.",
    user_answer: "Driving too close to the vehicle in front.",
    is_correct: true,
  },
  {
    question_number: 6,
    question: "Most appropriate use of the fast lane is when",
    options: [
      "rushing to your destination",
      "overtaking only",
      "overtaking and turning right ahead",
    ],
    correct_answer: "overtaking only",
    user_answer: "rushing to your destination",
    is_correct: false,
  },
  {
    question_number: 7,
    question:
      "You are driving vehicle A. You want to overtake vehicle B. You are coming up to the top of a hill. You should",
    options: [
      "Stay behind vehicle B until you are over the hill and it is safe to overtake",
      "Overtake vehicle B before the top of the hill",
      "Overtake vehicle B on the right hand side",
    ],
    correct_answer:
      "Stay behind vehicle B until you are over the hill and it is safe to overtake",
    user_answer:
      "Stay behind vehicle B until you are over the hill and it is safe to overtake",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "What does this sign mean?",
    options: ["Two-way traffic", "Hospital", "Intersection ahead"],
    correct_answer: "Intersection ahead",
    user_answer: "Intersection ahead",
    is_correct: true,
  },
  {
    question_number: 9,
    question:
      "What is one way of telling that you are becoming a more skilled driver?",
    options: [
      "If you are driving at a time when you would normally have been sleeping.",
      "After you drink your coffee",
      "After you fail to take your medication",
    ],
    correct_answer:
      "If you are driving at a time when you would normally have been sleeping.",
    user_answer:
      "If you are driving at a time when you would normally have been sleeping.",
    is_correct: true,
  },
  {
    question_number: 10,
    question: "When leaving a round about",
    options: [
      "The left indicator must be turned on",
      "There is no need for the indicator to be turned on",
      "The right indicator must be turned on",
    ],
    correct_answer: "The right indicator must be turned on",
    user_answer: "The left indicator must be turned on",
    is_correct: false,
  },
  {
    question_number: 11,
    question: "In which of the following areas is overtaking not allowed?",
    options: [
      "Intersections and roundabouts",
      "Open roads and highways",
      "Two-way and one way roads",
    ],
    correct_answer: "Intersections and roundabouts",
    user_answer: "Two-way and one way roads",
    is_correct: false,
  },
  {
    question_number: 12,
    question: "What could be the reason why this collision occurred?",
    options: [
      "both vehicles did not obey the traffic rule",
      "vehicle B did not obey the traffic rule",
      "vehicle A did not obey the traffic rule",
    ],
    correct_answer: "vehicle A did not obey the traffic rule",
    user_answer: "vehicle A did not obey the traffic rule",
    is_correct: true,
  },
  {
    question_number: 13,
    question:
      "You start losing focus and drift on across other lane, it is time to",
    options: [
      "take a pill to stay focused on driving",
      "take time to open your windows",
      "take a break from your driving",
    ],
    correct_answer: "take a break from your driving",
    user_answer: "take a pill to stay focused on driving",
    is_correct: false,
  },
  {
    question_number: 14,
    question:
      "Which of these signs mean you must travel on the direction of arrow?",
    options: ["B", "C", "A"],
    correct_answer: "B",
    user_answer: "B",
    is_correct: true,
  },
  {
    question_number: 15,
    question: "Major junctions have diagonal yellow lines. Why?",
    options: [
      "To prevent junction from being blocked.",
      "To improve visibility of road markings.",
      "To stop speeding drivers.",
    ],
    correct_answer: "To prevent junction from being blocked.",
    user_answer: "To prevent junction from being blocked.",
    is_correct: true,
  },
  {
    question_number: 16,
    question: "Driving is more dangerous if you",
    options: [
      "have noisy passengers in your car",
      "do not keep your car clean and tidy",
      "go on long drive regularly",
    ],
    correct_answer: "have noisy passengers in your car",
    user_answer: "have noisy passengers in your car",
    is_correct: true,
  },
  {
    question_number: 17,
    question:
      "How does wearing a seat belt prevent injuries or death during severe accidents?",
    options: [
      "Seat belt help keep the car to stop",
      "Vehicle occupants are restrained in their place by seat belt",
      "Seat belt help the airbag to work",
    ],
    correct_answer:
      "Vehicle occupants are restrained in their place by seat belt",
    user_answer: "Vehicle occupants are restrained in their place by seat belt",
    is_correct: true,
  },
  {
    question_number: 18,
    question: "The Lane Support Systems will work best if;",
    options: [
      "The lanes are somewhat faded",
      "The lanes are clearly marked",
      "The lanes are raised or made of dots",
    ],
    correct_answer: "The lanes are clearly marked",
    user_answer: "The lanes are clearly marked",
    is_correct: true,
  },
  {
    question_number: 19,
    question:
      "In order for Intelligent Speed Assistance to work efficiently, this is a requirement.",
    options: [
      "Precise GPS Data and road speed information",
      "Clear and properly working headlight",
      "Clear road speed signs",
    ],
    correct_answer: "Precise GPS Data and road speed information",
    user_answer: "Precise GPS Data and road speed information",
    is_correct: true,
  },
  {
    question_number: 20,
    question:
      "To improve safety when driving to an unfamiliar destination, it is best to;",
    options: [
      "Rely on the street signs",
      "Plan ahead of time",
      "Use the familiar roads only",
    ],
    correct_answer: "Plan ahead of time",
    user_answer: "Plan ahead of time",
    is_correct: true,
  },
  {
    question_number: 21,
    question:
      "Plan ahead if you are travelling somewhere that is not familiar to you. It helps;",
    options: [
      "In planning your trip",
      "Reduce the distraction in the car",
      "Reduce the stress of driving",
    ],
    correct_answer: "Reduce the stress of driving",
    user_answer: "In planning your trip",
    is_correct: false,
  },
  {
    question_number: 22,
    question: "If you find yourself tailgating another vehicle, it is best to;",
    options: [
      "Sound horn and warn other drivers of your speed",
      "Speed up and let the other vehicle move to another lane",
      "Slow down and increase the following distance",
    ],
    correct_answer: "Slow down and increase the following distance",
    user_answer: "Slow down and increase the following distance",
    is_correct: true,
  },
  {
    question_number: 23,
    question: "This helps to reduce your stress while driving.",
    options: [
      "Driving during rush hours",
      "Driving fast and arriving early",
      "Planning your trip in advance",
    ],
    correct_answer: "Planning your trip in advance",
    user_answer: "Driving fast and arriving early",
    is_correct: false,
  },
  {
    question_number: 24,
    question:
      "High beam lights help you see clearly when driving at night. Do not use high beam on;",
    options: [
      "Areas with street lighting",
      "Areas without street lighting",
      "Highways without lighting",
    ],
    correct_answer: "Areas with street lighting",
    user_answer: "Areas with street lighting",
    is_correct: true,
  },
  {
    question_number: 25,
    question:
      "What is the main reason for driving more slowly during night time?",
    options: [
      "Pedestrians are harder to see, especially those wearing dark clothing",
      "It is harder to see during sundown",
      "It is harder to see the lines on the road",
    ],
    correct_answer:
      "Pedestrians are harder to see, especially those wearing dark clothing",
    user_answer:
      "Pedestrians are harder to see, especially those wearing dark clothing",
    is_correct: true,
  },
  {
    question_number: 26,
    question: "Driving becomes stressful if;",
    options: [
      "Drivers drive according to the rules",
      "Drivers drive as per posted speed limit",
      "Drivers drive aggressively",
    ],
    correct_answer: "Drivers drive aggressively",
    user_answer: "Drivers drive according to the rules",
    is_correct: false,
  },
  {
    question_number: 27,
    question: "If you are driving too fast for the situation;",
    options: [
      "It gives you more time to react",
      "It gives you less time to react",
      "It gives other drivers more time to react",
    ],
    correct_answer: "It gives you less time to react",
    user_answer: "It gives you less time to react",
    is_correct: true,
  },
  {
    question_number: 28,
    question:
      "What can happen if you start accelerating at the end of the slip road?",
    options: [
      "The traffic flow will flow freely",
      "You may disrupt the flow of traffic",
      "The traffic flow will not be affected",
    ],
    correct_answer: "You may disrupt the flow of traffic",
    user_answer: "You may disrupt the flow of traffic",
    is_correct: true,
  },
  {
    question_number: 29,
    question:
      "While merging onto the main road, some of the vehicles on the main road swerved to avoid collision. What just happened?",
    options: [
      "The driver may have started accelerating from the end of the slip road",
      "The driver stopped at the end of the slip road",
      "The driver stopped at a red signal",
    ],
    correct_answer:
      "The driver may have started accelerating from the end of the slip road",
    user_answer:
      "The driver may have started accelerating from the end of the slip road",
    is_correct: true,
  },
  {
    question_number: 30,
    question:
      "You are driving on a highway and you just missed your exit. What is the safest action?",
    options: [
      "Switch on hazard lights and stop",
      "Stop, reverse and enter the slip road",
      "Move on and take the next exit",
    ],
    correct_answer: "Move on and take the next exit",
    user_answer: "Move on and take the next exit",
    is_correct: true,
  },
  {
    question_number: 31,
    question:
      "This group of vulnerable road users are not yet able to judge the speed of the vehicles.",
    options: ["Pedestrians", "School children", "Cyclists"],
    correct_answer: "School children",
    user_answer: "School children",
    is_correct: true,
  },
  {
    question_number: 32,
    question:
      "A simple act of flicking a cigarette butt can be very dangerous if;",
    options: [
      "It lands on the roof of a car",
      "It lands on a sandy area",
      "It lands on a motorcyclist or a cyclist",
    ],
    correct_answer: "It lands on a motorcyclist or a cyclist",
    user_answer: "It lands on a motorcyclist or a cyclist",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "This can act as warning for drivers who may be feeling tired or sleepy.",
    options: [
      "Coffee breaks after a long drive",
      "Vibrations when the vehicle drives over the rumble strips",
      "Warning road markings",
    ],
    correct_answer: "Vibrations when the vehicle drives over the rumble strips",
    user_answer: "Vibrations when the vehicle drives over the rumble strips",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "Why should you exercise patience when following a slow moving truck?",
    options: [
      "Trucks are supposed to be slow",
      "Its load may be too heavy to move faster",
      "It is best to overtake quickly",
    ],
    correct_answer: "Its load may be too heavy to move faster",
    user_answer: "Trucks are supposed to be slow",
    is_correct: false,
  },
  {
    question_number: 37,
    question:
      "On main roads and highways, emergency vehicles use the left lane. You must give way by;",
    options: [
      "Moving to the right",
      "Staying on your lane",
      "Moving to the left",
    ],
    correct_answer: "Moving to the right",
    user_answer: "Moving to the right",
    is_correct: true,
  },
  {
    question_number: 38,
    question:
      "If an emergency vehicle is trying to cross a red signal, what should other vehicles with green signal do?",
    options: [
      "Vehicles facing green signal must stop completely and wait",
      "Vehicles facing green signal must give way",
      "Vehicles facing green signal must proceed",
    ],
    correct_answer:
      "Vehicles facing green signal must stop completely and wait",
    user_answer: "Vehicles facing green signal must give way",
    is_correct: false,
  },
  {
    question_number: 39,
    question:
      "This warning sign warns the drivers to check and be aware of the;",
    options: [
      "Maximum length of their vehicle",
      "Maximum width of their vehicle",
      "Maximum weight of their vehicle",
    ],
    correct_answer: "Maximum length of their vehicle",
    user_answer: "Maximum length of their vehicle",
    is_correct: true,
  },
  {
    question_number: 40,
    question: "Before making a turn or changing lane, it is important to;",
    options: [
      "Take note of the vehicles plate",
      "Leave a safe gap from the vehicle behind",
      "Signal your intention for a reasonable time",
    ],
    correct_answer: "Signal your intention for a reasonable time",
    user_answer: "Signal your intention for a reasonable time",
    is_correct: true,
  },
  {
    question_number: 41,
    question:
      "The colored surface of the road is a tram box junction. Drivers are prohibited from entering the area unless;",
    options: [
      "the exit is clear",
      "the expected delay is short enough",
      "the exit is expected to clear anytime",
    ],
    correct_answer: "the exit is clear",
    user_answer: "the exit is clear",
    is_correct: true,
  },
  {
    question_number: 42,
    question:
      "When another vehicle is trying to overtake you, the UAE traffic law says you must;",
    options: [
      "slow down and keep to the right",
      "keep to your lane and maintain your speed",
      "slow down and be ready to stop",
    ],
    correct_answer: "slow down and keep to the right",
    user_answer: "keep to your lane and maintain your speed",
    is_correct: false,
  },
  {
    question_number: 43,
    question: "A safe behavior in the event of a collision is to;",
    options: [
      "check with the other people involved whether anyone is injured",
      "administer first aid to anyone who may be injured",
      "immediately move out anyone who may be injured",
    ],
    correct_answer:
      "check with the other people involved whether anyone is injured",
    user_answer: "immediately move out anyone who may be injured",
    is_correct: false,
  },
  {
    question_number: 44,
    question:
      "There is a collision ahead and you see an ambulance with lights and sirens activated, how do you deal with it?",
    options: [
      "stay on your lane so you do not get fined",
      "allow the ambulance to pass and stay close behind it to speed up your travel",
      "allow it to pass by giving way to it.",
    ],
    correct_answer: "allow it to pass by giving way to it.",
    user_answer: "allow it to pass by giving way to it.",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "If you are trying to report a traffic accident using the Dubai Police App, what safety message you will see on the app?",
    options: [
      "Move to safe location, do not obstruct traffic",
      "Drive Safely, everytime",
      "Buckle up, always",
    ],
    correct_answer: "Move to safe location, do not obstruct traffic",
    user_answer: "Move to safe location, do not obstruct traffic",
    is_correct: true,
  },
  {
    question_number: 46,
    question: "You are driving vehicle A. You must give way to",
    options: [
      "both the pedestrian and the motorcycle",
      "the pedestrian only",
      "the motorcycle only",
    ],
    correct_answer: "both the pedestrian and the motorcycle",
    user_answer: "both the pedestrian and the motorcycle",
    is_correct: true,
  },
  {
    question_number: 47,
    question: "Which vehicle must give way?",
    options: [
      "the vehicle that gets to the intersection last",
      "vehicle B",
      "vehicle A",
    ],
    correct_answer: "vehicle B",
    user_answer: "vehicle B",
    is_correct: true,
  },
  {
    question_number: 48,
    question: "You are driving vehicle A. How should you complete your turn?",
    options: [
      "you must not enter the intersection until the pedestrian has completely crossed the road",
      "you should enter the intersection slowly and give way to the pedestrian",
      "you should enter the intersection and complete your left turn",
    ],
    correct_answer:
      "you must not enter the intersection until the pedestrian has completely crossed the road",
    user_answer:
      "you should enter the intersection slowly and give way to the pedestrian",
    is_correct: false,
  },
  {
    question_number: 49,
    question: "If you are driving a pickup truck you should",
    options: [
      "load as much as you can onto the truck",
      "place all the load at the front of the truck",
      "cover your load to stop it moving around",
    ],
    correct_answer: "cover your load to stop it moving around",
    user_answer: "cover your load to stop it moving around",
    is_correct: true,
  },
  {
    question_number: 50,
    question: "Which of the following will make you a more dangerous driver?",
    options: [
      "Drinking alcohol",
      "Taking medicines",
      "Drinking alcohol and also taking certain medicines",
    ],
    correct_answer: "Drinking alcohol and also taking certain medicines",
    user_answer: "Drinking alcohol and also taking certain medicines",
    is_correct: true,
  },
  {
    question_number: 1,
    question: "Once you successfully pass the flooded area, it is important to",
    options: [
      "Maintain low speed and look for safe place to park.",
      "Restore brake efficiency.",
      "Find a mechanic to check the condition of your brakes system.",
    ],
    correct_answer: "Restore brake efficiency.",
    user_answer: "Maintain low speed and look for safe place to park.",
    is_correct: false,
  },
  {
    question_number: 2,
    question: "For regular saloon cars, do not drive through if",
    options: [
      "the flood is more than 50% of the tire height",
      "the flood is just starting",
      "the flood is starting to subside.",
    ],
    correct_answer: "the flood is more than 50% of the tire height",
    user_answer: "the flood is more than 50% of the tire height",
    is_correct: true,
  },
  {
    question_number: 3,
    question:
      "You are driving vehicle A and the biker is about to cross your path, what should you do?",
    options: [
      "swerve to the left to avoid the biker",
      "lookout for the biker and be ready to stop if necessary",
      "drive on, biker does not have the priority",
    ],
    correct_answer: "lookout for the biker and be ready to stop if necessary",
    user_answer: "lookout for the biker and be ready to stop if necessary",
    is_correct: true,
  },
  {
    question_number: 4,
    question: "When driving and using mobile phones",
    options: [
      "driver must be more attentive.",
      "driver must look farther ahead.",
      "driver react slower than usual.",
    ],
    correct_answer: "driver react slower than usual.",
    user_answer: "driver must look farther ahead.",
    is_correct: false,
  },
  {
    question_number: 5,
    question: "Driving in a safe manner means",
    options: [
      "driving at posted speed always.",
      "allowing for mistakes of others.",
      "maintaining 2-second gap always.",
    ],
    correct_answer: "allowing for mistakes of others.",
    user_answer: "maintaining 2-second gap always.",
    is_correct: false,
  },
  {
    question_number: 6,
    question: "Proper use of indicator provide",
    options: [
      "other drivers time to stop",
      "other drivers time to react appropriately.",
      "direction to destination of other drivers",
    ],
    correct_answer: "other drivers time to react appropriately.",
    user_answer: "other drivers time to react appropriately.",
    is_correct: true,
  },
  {
    question_number: 7,
    question: "What does this sign mean?",
    options: [
      "Vehicles must stop and give way",
      "Pedestrians must stop",
      "Vehicles must stop only when another vehicle is coming",
    ],
    correct_answer: "Vehicles must stop and give way",
    user_answer: "Vehicles must stop and give way",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "Drivers must use of indicators appropriately while driving",
    options: [
      "This is required by the UAE traffic law",
      "This is not required by the UAE traffic law",
      "This is required by the transport industry",
    ],
    correct_answer: "This is required by the UAE traffic law",
    user_answer: "This is required by the transport industry",
    is_correct: false,
  },
  {
    question_number: 9,
    question:
      "Who is the best person to decide whether a medicine might affect your driving?",
    options: ["your doctor or a pharmacist", "you", "your driving instructor"],
    correct_answer: "your doctor or a pharmacist",
    user_answer: "your doctor or a pharmacist",
    is_correct: true,
  },
  {
    question_number: 10,
    question: "Major junctions have diagonal yellow lines. Why?",
    options: [
      "To prevent junction from being blocked.",
      "To improve visibility of road markings.",
      "To stop speeding drivers.",
    ],
    correct_answer: "To prevent junction from being blocked.",
    user_answer: "To prevent junction from being blocked.",
    is_correct: true,
  },
  {
    question_number: 11,
    question: "Which sign identifies and marks a physical hazard?",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "A",
    is_correct: true,
  },
  {
    question_number: 12,
    question: "To properly wear a seat belt, it must not be twisted and must;",
    options: [
      "Restrain only one occupant",
      "Be used for long trips",
      "Be used in places that are congested",
    ],
    correct_answer: "Restrain only one occupant",
    user_answer: "Be used in places that are congested",
    is_correct: false,
  },
  {
    question_number: 13,
    question: "Since you are driving for a short distance, there is;",
    options: [
      "No need to wear a seat belt",
      "A need to wear a seat belt",
      "A chance to wear a seat belt",
    ],
    correct_answer: "A need to wear a seat belt",
    user_answer: "A need to wear a seat belt",
    is_correct: true,
  },
  {
    question_number: 14,
    question:
      "If a conventional cruise control is engaged on cruising mode, it may be disengaged by;",
    options: [
      "Stepping on the brakes",
      "Stepping on the accelerator",
      "Adjusting the gear lever",
    ],
    correct_answer: "Stepping on the brakes",
    user_answer: "Adjusting the gear lever",
    is_correct: false,
  },
  {
    question_number: 15,
    question:
      "If this system is activated during harsh braking, the driver will feel brake pedal pulsation.",
    options: [
      "Electronic Stability Program",
      "Anti-Lock Brake System",
      "Conventional Cruise Control",
    ],
    correct_answer: "Anti-Lock Brake System",
    user_answer: "Anti-Lock Brake System",
    is_correct: true,
  },
  {
    question_number: 16,
    question:
      "What should you do if your vehicle drifts near or over the lane marking and this system provides audible warning?",
    options: [
      "Cancel all safety systems",
      "Step on the brakes",
      "Steer back to the middle of the lane",
    ],
    correct_answer: "Steer back to the middle of the lane",
    user_answer: "Steer back to the middle of the lane",
    is_correct: true,
  },
  {
    question_number: 17,
    question: "If you find yourself tailgating another vehicle, it is best to;",
    options: [
      "Sound horn and warn other drivers of your speed",
      "Speed up and let the other vehicle move to another lane",
      "Slow down and increase the following distance",
    ],
    correct_answer: "Slow down and increase the following distance",
    user_answer: "Slow down and increase the following distance",
    is_correct: true,
  },
  {
    question_number: 18,
    question:
      "When you are observing the 2-second rule while following another vehicle, it means;",
    options: [
      "You are tailgating",
      "You are not tailgating",
      "Another vehicle is tailgating you",
    ],
    correct_answer: "You are not tailgating",
    user_answer: "You are tailgating",
    is_correct: false,
  },
  {
    question_number: 19,
    question:
      "Because they are difficult to see, be extra careful while driving at night for;",
    options: [
      "Public transport buses",
      "Motorcyclists and cyclists with their headlights on",
      "Motorcyclists and cyclists that are not using their headlights",
    ],
    correct_answer:
      "Motorcyclists and cyclists that are not using their headlights",
    user_answer: "Motorcyclists and cyclists with their headlights on",
    is_correct: false,
  },
  {
    question_number: 20,
    question:
      "UAE Traffic Law require drivers to use vehicle lights during night time as well as during the day where the view is unclear. Why?",
    options: [
      "Roads in the UAE are best for day time use only",
      "Road users are harder to see during night time",
      "Roads in the UAE have poor lighting",
    ],
    correct_answer: "Road users are harder to see during night time",
    user_answer: "Road users are harder to see during night time",
    is_correct: true,
  },
  {
    question_number: 21,
    question: "Aggressive driving increases fuel consumption, it is also;",
    options: [
      "Dangerous and adds to traffic congestion",
      "Creating a safer driving environment",
      "In keeping with rules and regulation",
    ],
    correct_answer: "Dangerous and adds to traffic congestion",
    user_answer: "Dangerous and adds to traffic congestion",
    is_correct: true,
  },
  {
    question_number: 22,
    question:
      "The diagram shows a drivers blind spot. What can you do about blind spots when you drive?",
    options: [
      "Set up your rear view mirrors so there are no blind spots.",
      "Know where your blind spots are and do a headcheck regularly.",
      "Have your eyesight checked regularly.",
    ],
    correct_answer:
      "Know where your blind spots are and do a headcheck regularly.",
    user_answer:
      "Know where your blind spots are and do a headcheck regularly.",
    is_correct: true,
  },
  {
    question_number: 23,
    question:
      "A slip road on a highway is provided a good distance from the start to the end. Why?",
    options: [
      "To allow merging vehicles to accelerate and join the traffic smoothly",
      "To allow for several vehicles to stop and wait",
      "To allow for other vehicles to overtake",
    ],
    correct_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    user_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    is_correct: true,
  },
  {
    question_number: 24,
    question:
      "It is important not to do this to safely leave the main stream of traffic.",
    options: [
      "Signal your intention to leave the traffic",
      "Cut in and drive over the chevron markings",
      "Reduce speed once inside the slip road",
    ],
    correct_answer: "Signal your intention to leave the traffic",
    user_answer: "Cut in and drive over the chevron markings",
    is_correct: false,
  },
  {
    question_number: 25,
    question:
      "You are driving on a highway and you just missed your exit. What is the safest action?",
    options: [
      "Switch on hazard lights and stop",
      "Stop, reverse and enter the slip road",
      "Move on and take the next exit",
    ],
    correct_answer: "Move on and take the next exit",
    user_answer: "Move on and take the next exit",
    is_correct: true,
  },
  {
    question_number: 26,
    question: "One of the ways to drive safely around school children is to;",
    options: [
      "Keep using the horn in their presence.",
      "Anticipate sudden movements especially around school buses",
      "Assume they know how to behave in traffic",
    ],
    correct_answer:
      "Anticipate sudden movements especially around school buses",
    user_answer: "Anticipate sudden movements especially around school buses",
    is_correct: true,
  },
  {
    question_number: 27,
    question:
      "Throwing waste from vehicles onto roads is an offence. The fine is;",
    options: [
      "Dhs 500 and 4 black points",
      "There is no fine",
      "a warning ticket",
    ],
    correct_answer: "Dhs 500 and 4 black points",
    user_answer: "Dhs 500 and 4 black points",
    is_correct: true,
  },
  {
    question_number: 28,
    question:
      "Driving in heavily congested traffic can be particularly dangerous. Be more safe by;",
    options: [
      "Slowing down and watching for hazards",
      "Speeding up to reach destination faster",
      "Patiently waiting at the junction",
    ],
    correct_answer: "Slowing down and watching for hazards",
    user_answer: "Speeding up to reach destination faster",
    is_correct: false,
  },
  {
    question_number: 29,
    question:
      "Staying in your lane is important. It is called lane discipline. Violation of Lane discipline in Dubai carries a fine of;",
    options: ["AED 1000.00", "AED 400.00", "AED 150.00"],
    correct_answer: "AED 1000.00",
    user_answer: "AED 400.00",
    is_correct: false,
  },
  {
    question_number: 30,
    question:
      "The function of the brakes is to slow down and stop the vehicle. How can you tell if the vehicle ahead of you is slowing down?",
    options: [
      "The driver of the vehicle in front should warn with his hand",
      "You should be alerted by the brake lights switching on",
      "You should be alerted by the sound of the tires",
    ],
    correct_answer: "You should be alerted by the brake lights switching on",
    user_answer: "You should be alerted by the brake lights switching on",
    is_correct: true,
  },
  {
    question_number: 31,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 32,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "This can act as warning for drivers who may be feeling tired or sleepy.",
    options: [
      "Coffee breaks after a long drive",
      "Vibrations when the vehicle drives over the rumble strips",
      "Warning road markings",
    ],
    correct_answer: "Vibrations when the vehicle drives over the rumble strips",
    user_answer: "Vibrations when the vehicle drives over the rumble strips",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "As a safe driver, how would you deal safely with other road users especially when turning at a junction?",
    options: [
      "Look both ways and proceed as quickly as possible",
      "Look out for motorcyclists. If you do not, you may not see them.",
      "Turn without indicating and confirming it is safe for all road users",
    ],
    correct_answer:
      "Look out for motorcyclists. If you do not, you may not see them.",
    user_answer: "Look both ways and proceed as quickly as possible",
    is_correct: false,
  },
  {
    question_number: 35,
    question:
      "When following a motorcycle, it is important not to tail gate because;",
    options: [
      "This may intimidate the rider and may result to loss of control.",
      "Motorcycles are required to give way to pedestrians",
      "Motorcycle riders must wear protective helmet",
    ],
    correct_answer:
      "This may intimidate the rider and may result to loss of control.",
    user_answer: "Motorcycles are required to give way to pedestrians",
    is_correct: false,
  },
  {
    question_number: 36,
    question: "When giving way to emergency vehicles, it is;",
    options: [
      "Fine to cross the red signal",
      "Acceptable to use the road shoulders",
      "Not allowed to use the road shoulders",
    ],
    correct_answer: "Not allowed to use the road shoulders",
    user_answer: "Acceptable to use the road shoulders",
    is_correct: false,
  },
  {
    question_number: 37,
    question:
      "This road marking informs drivers not to park or stop adjacent to the line marking except;",
    options: [
      "to give other drivers instructions to stop",
      "to give way to pedestrians or cyclists crossing the area",
      "to force other drivers to stop suddenly",
    ],
    correct_answer: "to give way to pedestrians or cyclists crossing the area",
    user_answer: "to force other drivers to stop suddenly",
    is_correct: false,
  },
  {
    question_number: 38,
    question:
      "This road marking warns drivers that the lane they are travelling in will;",
    options: [
      "merge with the tram or railway line",
      "close after a few meters",
      "cross a railway or tramline",
    ],
    correct_answer: "cross a railway or tramline",
    user_answer: "close after a few meters",
    is_correct: false,
  },
  {
    question_number: 39,
    question:
      "When another vehicle is trying to overtake you, the UAE traffic law says you must;",
    options: [
      "slow down and keep to the right",
      "keep to your lane and maintain your speed",
      "slow down and be ready to stop",
    ],
    correct_answer: "slow down and keep to the right",
    user_answer: "keep to your lane and maintain your speed",
    is_correct: false,
  },
  {
    question_number: 40,
    question: "One possible danger when overtaking a truck on an open road is;",
    options: [
      "presence of speed cameras on the road",
      "presence of other vehicles",
      "presence of strong winds",
    ],
    correct_answer: "presence of strong winds",
    user_answer: "presence of other vehicles",
    is_correct: false,
  },
  {
    question_number: 41,
    question:
      "You see a gap, a chance to overtake near a pedestrian crossing. What should you do?",
    options: ["Overtake carefully", "Do not overtake", "Stop"],
    correct_answer: "Do not overtake",
    user_answer: "Do not overtake",
    is_correct: true,
  },
  {
    question_number: 42,
    question:
      "You are travelling on freeway and you want to exit, what should you be doing to stay safe?",
    options: [
      "slow down and change lanes",
      "check your mirrors and confirm safety",
      "check your speed",
    ],
    correct_answer: "check your mirrors and confirm safety",
    user_answer: "check your mirrors and confirm safety",
    is_correct: true,
  },
  {
    question_number: 43,
    question: "When leaving the freeway, it is important to be;",
    options: [
      "in the correct lane well before the exit",
      "able to get in the correct lane once close to the exit",
      "exit as quickly as possible",
    ],
    correct_answer: "in the correct lane well before the exit",
    user_answer: "able to get in the correct lane once close to the exit",
    is_correct: false,
  },
  {
    question_number: 44,
    question: "If you are involved in a collision, it is very important to;",
    options: [
      "remain inside your vehicle only to avoid the other driver",
      "stay calm and avoid argument with the other driver",
      "avoid eye contact with the other driver to remain safe",
    ],
    correct_answer: "stay calm and avoid argument with the other driver",
    user_answer: "stay calm and avoid argument with the other driver",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "Why is it important to stop in a safe place away from traffic if involved in a crash without injuries?",
    options: [
      "to avoid obstructing the traffic and creating a traffic jam",
      "to enable inspecting the vehicle and be able to leave immediately",
      "to avoid being blamed for the crash",
    ],
    correct_answer:
      "to avoid obstructing the traffic and creating a traffic jam",
    user_answer: "to avoid obstructing the traffic and creating a traffic jam",
    is_correct: true,
  },
  {
    question_number: 46,
    question:
      "What type of traffic accident can you report using the Dubai Police App?",
    options: ["Injury accidents", "Major accidents", "Minor accidents"],
    correct_answer: "Minor accidents",
    user_answer: "Major accidents",
    is_correct: false,
  },
  {
    question_number: 47,
    question:
      "This feature of the Dubai Police App is meant to connect users to the Dubai Police quickly;",
    options: ["SOS button", "e-crime", "Home security"],
    correct_answer: "SOS button",
    user_answer: "SOS button",
    is_correct: true,
  },
  {
    question_number: 48,
    question: "Which vehicle must give way?",
    options: [
      "the vehicle that gets to the intersection last",
      "vehicle A",
      "vehicle B",
    ],
    correct_answer: "vehicle B",
    user_answer: "vehicle B",
    is_correct: true,
  },
  {
    question_number: 49,
    question:
      "You are driving vehicle A. What should you do as you enter the freeway?",
    options: [
      "adjust your speed to match the freeway traffic",
      "stop",
      "slow down",
    ],
    correct_answer: "adjust your speed to match the freeway traffic",
    user_answer: "adjust your speed to match the freeway traffic",
    is_correct: true,
  },
  {
    question_number: 50,
    question:
      "You are driving car A. What does this diagram say about following distance?",
    options: [
      "in good driving conditions there should be about a one second gap between you and the car in front",
      "in good driving conditions there should be at least a two second gap between you and the car in front",
      "there is no parking allowed",
    ],
    correct_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    user_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    is_correct: true,
  },
  {
    question_number: 1,
    question: "Why is it important to scan the road scene when you drive?",
    options: [
      "it will help you stay awake",
      "you are more likely to anticipate potential hazards",
      "you will develop good vehicle control",
    ],
    correct_answer: "you are more likely to anticipate potential hazards",
    user_answer: "you are more likely to anticipate potential hazards",
    is_correct: true,
  },
  {
    question_number: 2,
    question:
      "You are overtaking. One way to know when it is safe to return to your lane is",
    options: [
      "to turn on your left indicator for 5 seconds.",
      "to wait until you see both headlights of the vehicle you have overtaken in your rear view mirror.",
      "to continue straight ahead until you are at least 300 metres ahead of the vehicle that you are overtaking.",
    ],
    correct_answer:
      "to wait until you see both headlights of the vehicle you have overtaken in your rear view mirror.",
    user_answer: "to turn on your left indicator for 5 seconds.",
    is_correct: false,
  },
  {
    question_number: 3,
    question: "Dangers in driving in fog can be minimized by.",
    options: [
      "Keeping windows and mirrors clean.",
      "Listening to the radio for alerts.",
      "Using the maximum capacity of the vehicles headlights.",
    ],
    correct_answer: "Keeping windows and mirrors clean.",
    user_answer: "Using the maximum capacity of the vehicles headlights.",
    is_correct: false,
  },
  {
    question_number: 4,
    question: "For regular saloon cars, do not drive through if",
    options: [
      "the flood is more than 50% of the tire height",
      "the flood is just starting",
      "the flood is starting to subside.",
    ],
    correct_answer: "the flood is more than 50% of the tire height",
    user_answer: "the flood is more than 50% of the tire height",
    is_correct: true,
  },
  {
    question_number: 5,
    question: "When driving and using mobile phones",
    options: [
      "driver must be more attentive.",
      "driver must look farther ahead.",
      "driver react slower than usual.",
    ],
    correct_answer: "driver react slower than usual.",
    user_answer: "driver must look farther ahead.",
    is_correct: false,
  },
  {
    question_number: 6,
    question: "When being overtaken, you must",
    options: [
      "slow down and keep to the right",
      "speed up",
      "Maintain your speed",
    ],
    correct_answer: "slow down and keep to the right",
    user_answer: "Maintain your speed",
    is_correct: false,
  },
  {
    question_number: 7,
    question: "Learner drivers will consistently make a good driving decisions",
    options: [
      "only after a lot of experience and practice",
      "straight away because they have good reflexes",
      "after a few driving lessons",
    ],
    correct_answer: "only after a lot of experience and practice",
    user_answer: "only after a lot of experience and practice",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "Driving under the influence of alcohol is dangerous and",
    options: [
      "UAE traffic law prohibits it",
      "UAE traffic law allows small amount",
      "UAE traffic law controls it",
    ],
    correct_answer: "UAE traffic law prohibits it",
    user_answer: "UAE traffic law prohibits it",
    is_correct: true,
  },
  {
    question_number: 9,
    question: "Driving under the influence of alcohol is punishable by",
    options: [
      "24 black points plus AED 2400.",
      "24 black points plus other fines",
      "24 black points plus fines by court.",
    ],
    correct_answer: "24 black points plus fines by court.",
    user_answer: "24 black points plus AED 2400.",
    is_correct: false,
  },
  {
    question_number: 10,
    question: "When you see this sign, you are",
    options: [
      "travelling in a two- way traffic",
      "about to cross a two- way traffic",
      "driving in opposite direction",
    ],
    correct_answer: "travelling in a two- way traffic",
    user_answer: "travelling in a two- way traffic",
    is_correct: true,
  },
  {
    question_number: 11,
    question: "When leaving a round about",
    options: [
      "The left indicator must be turned on",
      "There is no need for the indicator to be turned on",
      "The right indicator must be turned on",
    ],
    correct_answer: "The right indicator must be turned on",
    user_answer: "The left indicator must be turned on",
    is_correct: false,
  },
  {
    question_number: 12,
    question: "Proper use of indicators will",
    options: [
      "Let other road users recognize you",
      "Let other road users know your intention",
      "Let other drivers follow",
    ],
    correct_answer: "Let other road users know your intention",
    user_answer: "Let other drivers follow",
    is_correct: false,
  },
  {
    question_number: 13,
    question: "Which sign means you must not stop in this area?",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "C",
    is_correct: false,
  },
  {
    question_number: 14,
    question: "One of these signs mean the beginning of freeway",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "B",
    is_correct: false,
  },
  {
    question_number: 15,
    question:
      "in good driving conditions you should leave at least a two second gap between you and the car in front. When should you leave a larger gap?",
    options: [
      "at all times",
      "When driving conditions are good.",
      "when the driving conditions are poor such as sand storms or rain",
    ],
    correct_answer:
      "when the driving conditions are poor such as sand storms or rain",
    user_answer:
      "when the driving conditions are poor such as sand storms or rain",
    is_correct: true,
  },
  {
    question_number: 16,
    question: "This sign indicates the beginning of median.",
    options: ["A", "B", "C"],
    correct_answer: "C",
    user_answer: "B",
    is_correct: false,
  },
  {
    question_number: 17,
    question: "Driving is more dangerous if you",
    options: [
      "have noisy passengers in your car",
      "do not keep your car clean and tidy",
      "go on long drive regularly",
    ],
    correct_answer: "have noisy passengers in your car",
    user_answer: "have noisy passengers in your car",
    is_correct: true,
  },
  {
    question_number: 18,
    question:
      "You were driving on a busy street and something caused you to brake and change direction. What just happened?",
    options: [
      "You just avoided an actual hazard",
      "You just had an accident",
      "You were practicing your hazard perception ability",
    ],
    correct_answer: "You just avoided an actual hazard",
    user_answer: "You just avoided an actual hazard",
    is_correct: true,
  },
  {
    question_number: 19,
    question:
      "These are some of the important skills that will make you a safe driver.",
    options: [
      "Knowing when to turn left and right at the junctions",
      "Knowing what hazards to look for in different situations",
      "Knowing where to find the hazards in different roads",
    ],
    correct_answer: "Knowing what hazards to look for in different situations",
    user_answer: "Knowing what hazards to look for in different situations",
    is_correct: true,
  },
  {
    question_number: 20,
    question:
      "How does wearing a seat belt prevent injuries or death during severe accidents?",
    options: [
      "Seat belt help keep the car to stop",
      "Vehicle occupants are restrained in their place by seat belt",
      "Seat belt help the airbag to work",
    ],
    correct_answer:
      "Vehicle occupants are restrained in their place by seat belt",
    user_answer: "Vehicle occupants are restrained in their place by seat belt",
    is_correct: true,
  },
  {
    question_number: 21,
    question: "One of many ways to ensure your child rides your car safely is;",
    options: [
      "Use the best safety restraint for your child’s size.",
      "Use the adult seat belt for your child",
      "Holding the child firmly on your lap",
    ],
    correct_answer: "Use the best safety restraint for your child’s size.",
    user_answer: "Use the best safety restraint for your child’s size.",
    is_correct: true,
  },
  {
    question_number: 22,
    question:
      "For driver assistance systems to work properly, the sensors need to be;",
    options: [
      "Clean, unobstructed and undamaged",
      "Clean, modern and state of the art",
      "Clean and placed in the front sides of the vehicle",
    ],
    correct_answer: "Clean, unobstructed and undamaged",
    user_answer: "Clean, unobstructed and undamaged",
    is_correct: true,
  },
  {
    question_number: 23,
    question:
      "To improve safety when driving to an unfamiliar destination, it is best to;",
    options: [
      "Rely on the street signs",
      "Plan ahead of time",
      "Use the familiar roads only",
    ],
    correct_answer: "Plan ahead of time",
    user_answer: "Plan ahead of time",
    is_correct: true,
  },
  {
    question_number: 24,
    question:
      "Plan ahead if you are travelling somewhere that is not familiar to you. It helps;",
    options: [
      "In planning your trip",
      "Reduce the distraction in the car",
      "Reduce the stress of driving",
    ],
    correct_answer: "Reduce the stress of driving",
    user_answer: "In planning your trip",
    is_correct: false,
  },
  {
    question_number: 25,
    question: "When you are tail gating another vehicle, it means;",
    options: [
      "You are driving with safe following distance",
      "You are driving too close to the vehicle in front",
      "You are observing all around safety cushion",
    ],
    correct_answer: "You are driving too close to the vehicle in front",
    user_answer: "You are driving with safe following distance",
    is_correct: false,
  },
  {
    question_number: 26,
    question:
      "Allowing for longer gap between your vehicle and other vehicles mean you;",
    options: [
      "Allow for unexpected actions of other drivers",
      "Allow more space for more passengers",
      "Allow other vehicles to pass you on the right side",
    ],
    correct_answer: "Allow for unexpected actions of other drivers",
    user_answer: "Allow for unexpected actions of other drivers",
    is_correct: true,
  },
  {
    question_number: 27,
    question:
      "High beam lights help you see clearly when driving at night. Do not use high beam on;",
    options: [
      "Areas with street lighting",
      "Areas without street lighting",
      "Highways without lighting",
    ],
    correct_answer: "Areas with street lighting",
    user_answer: "Areas with street lighting",
    is_correct: true,
  },
  {
    question_number: 28,
    question:
      "You need to increase following distance when driving during the night. Why?",
    options: [
      "So you will have more time to react",
      "So you will have more time to rest",
      "It is better to drive during day time",
    ],
    correct_answer: "So you will have more time to react",
    user_answer: "So you will have more time to react",
    is_correct: true,
  },
  {
    question_number: 29,
    question: "After passing this sign, which sign are you likely to see next?",
    options: ["A", "B", "C"],
    correct_answer: "B",
    user_answer: "A",
    is_correct: false,
  },
  {
    question_number: 30,
    question:
      "There is zero tolerance for drink driving in Dubai. You risk being;",
    options: [
      "Fined, jailed or your license confiscated",
      "Issued a speeding ticket",
      "Issued an illegal ticket",
    ],
    correct_answer: "Fined, jailed or your license confiscated",
    user_answer: "Issued a speeding ticket",
    is_correct: false,
  },
  {
    question_number: 31,
    question:
      "It is important not to do this to safely leave the main stream of traffic.",
    options: [
      "Signal your intention to leave the traffic",
      "Cut in and drive over the chevron markings",
      "Reduce speed once inside the slip road",
    ],
    correct_answer: "Signal your intention to leave the traffic",
    user_answer: "Cut in and drive over the chevron markings",
    is_correct: false,
  },
  {
    question_number: 32,
    question:
      "You are driving on a highway and you just missed your exit. What is the safest action?",
    options: [
      "Switch on hazard lights and stop",
      "Stop, reverse and enter the slip road",
      "Move on and take the next exit",
    ],
    correct_answer: "Move on and take the next exit",
    user_answer: "Move on and take the next exit",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "Why should drivers be more careful when driving near pedestrians?",
    options: [
      "Some pedestrians are crossing on the junctions",
      "Some pedestrians may have impaired hearing or vision",
      "Pedestrians are walking from the opposite direction of traffic",
    ],
    correct_answer: "Some pedestrians may have impaired hearing or vision",
    user_answer: "Some pedestrians are crossing on the junctions",
    is_correct: false,
  },
  {
    question_number: 34,
    question:
      "When driving near pedestrians, what should you be ready to do at any moment?",
    options: [
      "Stop using mobile phones",
      "Give way or stop if necessary",
      "Focus on your driving",
    ],
    correct_answer: "Give way or stop if necessary",
    user_answer: "Give way or stop if necessary",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 37,
    question: "If you are following a motorcycle, be aware that;",
    options: [
      "Motorcycles may be able to accelerate and/or stop faster than a car.",
      "Sharing the space with motorcycle in a lane is acceptable",
      "Acceleration of motorcycle is the same with cars",
    ],
    correct_answer:
      "Motorcycles may be able to accelerate and/or stop faster than a car.",
    user_answer: "Sharing the space with motorcycle in a lane is acceptable",
    is_correct: false,
  },
  {
    question_number: 38,
    question:
      "When dealing with other vehicles on the road, it is important to remember that;",
    options: [
      "Motorcycle riders have equal protection as other road users",
      "Motorcycles are entitled to the full size of the lane as other vehicles",
      "Motorcycle riders have the right of way and priority over other road users",
    ],
    correct_answer:
      "Motorcycles are entitled to the full size of the lane as other vehicles",
    user_answer:
      "Motorcycles are entitled to the full size of the lane as other vehicles",
    is_correct: true,
  },
  {
    question_number: 39,
    question:
      "Light vehicle drivers have to realize that this area is a blind spot for large and trucks and buses.",
    options: [
      "Around 5 meters in front",
      "Immediately in front",
      "Around 15 meters on the side",
    ],
    correct_answer: "Immediately in front",
    user_answer: "Around 5 meters in front",
    is_correct: false,
  },
  {
    question_number: 40,
    question:
      "If you are already inside the roundabout, how should you deal with an emergency vehicle?",
    options: [
      "Moving to the left or right without crossing the red signal.",
      "Stop then exit the roundabout and move to the right lane",
      "Keep moving, exit the roundabout and move to the right lane",
    ],
    correct_answer:
      "Keep moving, exit the roundabout and move to the right lane",
    user_answer: "Moving to the left or right without crossing the red signal.",
    is_correct: false,
  },
  {
    question_number: 41,
    question: "When giving way to emergency vehicles, it is;",
    options: [
      "Fine to cross the red signal",
      "Acceptable to use the road shoulders",
      "Not allowed to use the road shoulders",
    ],
    correct_answer: "Not allowed to use the road shoulders",
    user_answer: "Acceptable to use the road shoulders",
    is_correct: false,
  },
  {
    question_number: 42,
    question:
      "Tram movement have priority over other road users in the Tram right of Way, except:",
    options: [
      "Speeding cars",
      "Pedestrians",
      "Army vehicles when moving in convoy.",
    ],
    correct_answer: "Army vehicles when moving in convoy.",
    user_answer: "Army vehicles when moving in convoy.",
    is_correct: true,
  },
  {
    question_number: 43,
    question: "When on freeway, never travel on the left most lane except;",
    options: ["when overtaking", "in case of emergency", "during bad weather"],
    correct_answer: "when overtaking",
    user_answer: "when overtaking",
    is_correct: true,
  },
  {
    question_number: 44,
    question:
      "In the event of a collision with another vehicle, why is it important to take note of the other parties plate number?",
    options: [
      "to inform the Police in case the other driver leaves the accident scene",
      "to inform the Police the other driver is at fault",
      "to have a direct negotiation outside of the Police",
    ],
    correct_answer:
      "to inform the Police in case the other driver leaves the accident scene",
    user_answer:
      "to inform the Police in case the other driver leaves the accident scene",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "Throwing waste from vehicles onto the roads is an offense. It also dangerous because;",
    options: [
      "fine and black points may be imposed",
      "any debris on the road that drivers run over or avoid can cause chain collision to happen",
      "Dubai roads are clean, an image of a world class city",
    ],
    correct_answer:
      "any debris on the road that drivers run over or avoid can cause chain collision to happen",
    user_answer:
      "any debris on the road that drivers run over or avoid can cause chain collision to happen",
    is_correct: true,
  },
  {
    question_number: 46,
    question:
      "When reporting a traffic accident using the Dubai Police App, which 3 information is required:",
    options: [
      "injured passengers, mobile number, liable vehicle",
      "vehicle plate number, license number, picture of damages",
      "picture of damages, email address, vehicle plate number",
    ],
    correct_answer: "vehicle plate number, license number, picture of damages",
    user_answer: "vehicle plate number, license number, picture of damages",
    is_correct: true,
  },
  {
    question_number: 47,
    question: "Why should vehicle A give way to vehicle B?",
    options: [
      "because vehicle B is travelling fast inside the round about",
      "because vehicle A is already stopped",
      "because vehicle A is facing a stop line",
    ],
    correct_answer: "because vehicle A is facing a stop line",
    user_answer: "because vehicle A is already stopped",
    is_correct: false,
  },
  {
    question_number: 48,
    question: "You are driving vehicle A. When can you overtake?",
    options: [
      "when vehicle B signals you to pass",
      "when you have a clear view of the road ahead",
      "as soon as vehicle C has driven past you",
    ],
    correct_answer: "when you have a clear view of the road ahead",
    user_answer: "when you have a clear view of the road ahead",
    is_correct: true,
  },
  {
    question_number: 49,
    question:
      "You are driving vehicle A. What can you do to make it safer to cross the intersection?",
    options: [
      "stop and let vehicle B turn first, then continue when the road ahead is clear",
      "speed up so you cross the intersection before vehicle B turns",
      "make eye contact with the other driver to get an idea of what vehicle B will do",
    ],
    correct_answer:
      "make eye contact with the other driver to get an idea of what vehicle B will do",
    user_answer:
      "speed up so you cross the intersection before vehicle B turns",
    is_correct: false,
  },
  {
    question_number: 50,
    question: "One of the difficulties of driving is",
    options: [
      "letting other drivers know when they are driving dangerously.",
      "Predicting what other drivers will do.",
      "checking your engine oil regularly.",
    ],
    correct_answer: "Predicting what other drivers will do.",
    user_answer:
      "letting other drivers know when they are driving dangerously.",
    is_correct: false,
  },
  {
    question_number: 1,
    question: "At what speed should you travel on the road?",
    options: [
      "At a speed shown on the speed limit signs",
      "At least 10 km/h below the speed limit signs.",
      "At a speed shown on a speed limit signs or slower, depending on the road conditions.",
    ],
    correct_answer:
      "At a speed shown on a speed limit signs or slower, depending on the road conditions.",
    user_answer: "At a speed shown on the speed limit signs",
    is_correct: false,
  },
  {
    question_number: 2,
    question: "If visibility is reduced by fog,",
    options: [
      "You must switch on your hazard lights",
      "Be patient and avoid passing or crossing traffic.",
      "Maintain your speed",
    ],
    correct_answer: "Be patient and avoid passing or crossing traffic.",
    user_answer: "You must switch on your hazard lights",
    is_correct: false,
  },
  {
    question_number: 3,
    question: "If the fog is too dense to continue, it is best to",
    options: [
      "Keep driving with the high beam lights on.",
      "Pull off the road and position away from traffic",
      "Keep driving with the low beam lights on.",
    ],
    correct_answer: "Pull off the road and position away from traffic",
    user_answer: "Keep driving with the high beam lights on.",
    is_correct: false,
  },
  {
    question_number: 4,
    question: "When driving, avoid this kind of behavior",
    options: [
      "Maintaining safe gap.",
      "Driving too close to the vehicle in front.",
      "Keeping to the slow lane.",
    ],
    correct_answer: "Driving too close to the vehicle in front.",
    user_answer: "Driving too close to the vehicle in front.",
    is_correct: true,
  },
  {
    question_number: 5,
    question: "The best way to deal with drivers signaling to turn is",
    options: [
      "To intentionally push in",
      "To intentionally block their path.",
      "To give way and allow to turn",
    ],
    correct_answer: "To give way and allow to turn",
    user_answer: "To give way and allow to turn",
    is_correct: true,
  },
  {
    question_number: 6,
    question: "Allowing extra travel time",
    options: [
      "will enable enjoying the route.",
      "is a tough choice.",
      "is one of good driving practices.",
    ],
    correct_answer: "is one of good driving practices.",
    user_answer: "is one of good driving practices.",
    is_correct: true,
  },
  {
    question_number: 7,
    question: "Driving at your best condition means",
    options: [
      "not driving when sleepy or tired.",
      "choosing the best routes.",
      "not driving when in doubt of way.",
    ],
    correct_answer: "not driving when sleepy or tired.",
    user_answer: "not driving when sleepy or tired.",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "One of the many techniques to safe driving is",
    options: [
      "to try to focus on the operating the vehicle only",
      "to try to predict what other drivers will do next",
      "to try to stay ahead of the other drivers everytime",
    ],
    correct_answer: "to try to predict what other drivers will do next",
    user_answer: "to try to focus on the operating the vehicle only",
    is_correct: false,
  },
  {
    question_number: 9,
    question: "Driving under the influence of alcohol is dangerous and",
    options: [
      "UAE traffic law prohibits it",
      "UAE traffic law allows small amount",
      "UAE traffic law controls it",
    ],
    correct_answer: "UAE traffic law prohibits it",
    user_answer: "UAE traffic law prohibits it",
    is_correct: true,
  },
  {
    question_number: 10,
    question: "This traffic sign mean drivers are",
    options: [
      "prohibited from exceeding 80 kph speed limit",
      "warned not to exceed the 80 kph speed limit",
      "informed of the speed limit ahead",
    ],
    correct_answer: "prohibited from exceeding 80 kph speed limit",
    user_answer: "warned not to exceed the 80 kph speed limit",
    is_correct: false,
  },
  {
    question_number: 11,
    question:
      "What is one way of telling that you are becoming a more skilled driver?",
    options: [
      "If you are driving at a time when you would normally have been sleeping.",
      "After you drink your coffee",
      "After you fail to take your medication",
    ],
    correct_answer:
      "If you are driving at a time when you would normally have been sleeping.",
    user_answer:
      "If you are driving at a time when you would normally have been sleeping.",
    is_correct: true,
  },
  {
    question_number: 12,
    question: "Which sign means it is allowed to make a U-turn ahead?",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "A",
    is_correct: true,
  },
  {
    question_number: 13,
    question:
      "You start losing focus and drift on across other lane, it is time to",
    options: [
      "take a pill to stay focused on driving",
      "take time to open your windows",
      "take a break from your driving",
    ],
    correct_answer: "take a break from your driving",
    user_answer: "take time to open your windows",
    is_correct: false,
  },
  {
    question_number: 14,
    question:
      "Driving under the influence of alcohol is very dangerous because",
    options: [
      "alcohol is not allowed at all",
      "judging the driving risks become more difficult",
      "the following distance becomes less",
    ],
    correct_answer: "judging the driving risks become more difficult",
    user_answer: "judging the driving risks become more difficult",
    is_correct: true,
  },
  {
    question_number: 15,
    question:
      "You are driving vehicle A. Part of the load of truck B is about to fall off. You should",
    options: [
      "maintain your speed and distance behind the truck",
      "check behind and slow down as quickly as possible",
      "speed up and overtake the truck immediately",
    ],
    correct_answer: "check behind and slow down as quickly as possible",
    user_answer: "check behind and slow down as quickly as possible",
    is_correct: true,
  },
  {
    question_number: 16,
    question:
      "In a crash, serious injuries often result when people are thrown into each other or to parts of the vehicle. How do you prevent this from happening?",
    options: [
      "The driver should be wearing a seat belt properly.",
      "The driver and the passengers should be wearing seat belt properly.",
      "The passengers should be wearing seat belt properly.",
    ],
    correct_answer:
      "The driver and the passengers should be wearing seat belt properly.",
    user_answer:
      "The driver and the passengers should be wearing seat belt properly.",
    is_correct: true,
  },
  {
    question_number: 17,
    question:
      "Why is it important to use rear facing car seats for your infant?",
    options: [
      "Infants need more attention compared to toddlers",
      "Rear-facing car seat distributes the crash force on the entire body.",
      "Infants need more space at the back seat",
    ],
    correct_answer:
      "Rear-facing car seat distributes the crash force on the entire body.",
    user_answer:
      "Rear-facing car seat distributes the crash force on the entire body.",
    is_correct: true,
  },
  {
    question_number: 18,
    question:
      "So that seat belt can best provide protection it is designed for, it must be firmly adjusted and;",
    options: [
      "Must be worn properly",
      "Must be used even for infant",
      "Must be used during long trips",
    ],
    correct_answer: "Must be worn properly",
    user_answer: "Must be used even for infant",
    is_correct: false,
  },
  {
    question_number: 19,
    question:
      "In case of loss of traction due to skidding, this system may apply brakes to individual wheels to create torque.",
    options: [
      "Anti-Lock Brake System",
      "Parking Assistance System",
      "Electronic Stability Program",
    ],
    correct_answer: "Electronic Stability Program",
    user_answer: "Anti-Lock Brake System",
    is_correct: false,
  },
  {
    question_number: 20,
    question: "If you find yourself tailgating another vehicle, it is best to;",
    options: [
      "Sound horn and warn other drivers of your speed",
      "Speed up and let the other vehicle move to another lane",
      "Slow down and increase the following distance",
    ],
    correct_answer: "Slow down and increase the following distance",
    user_answer: "Slow down and increase the following distance",
    is_correct: true,
  },
  {
    question_number: 21,
    question: "This helps to reduce your stress while driving.",
    options: [
      "Driving during rush hours",
      "Driving fast and arriving early",
      "Planning your trip in advance",
    ],
    correct_answer: "Planning your trip in advance",
    user_answer: "Planning your trip in advance",
    is_correct: true,
  },
  {
    question_number: 22,
    question:
      "You need to increase following distance when driving during the night. Why?",
    options: [
      "So you will have more time to react",
      "So you will have more time to rest",
      "It is better to drive during day time",
    ],
    correct_answer: "So you will have more time to react",
    user_answer: "So you will have more time to rest",
    is_correct: false,
  },
  {
    question_number: 23,
    question:
      "This action can disrupt the smooth flow of traffic and endanger other road users.",
    options: [
      "Leaving the main road by cutting in at the end of the slip road.",
      "Slowing down when inside the slip road",
      "Signaling intention before leaving slip road",
    ],
    correct_answer:
      "Leaving the main road by cutting in at the end of the slip road.",
    user_answer:
      "Leaving the main road by cutting in at the end of the slip road.",
    is_correct: true,
  },
  {
    question_number: 24,
    question:
      "How do you safely exit the main road and without disturbing the flow of traffic?",
    options: [
      "Signal your intention, cut-in at the end of the slip road.",
      "Signal your intention, enter the slip road early",
      "Without using the indicator, enter the slip road early",
    ],
    correct_answer: "Signal your intention, enter the slip road early",
    user_answer: "Without using the indicator, enter the slip road early",
    is_correct: false,
  },
  {
    question_number: 25,
    question:
      "You are driving on a highway and you just missed your exit. What is the safest action?",
    options: [
      "Switch on hazard lights and stop",
      "Stop, reverse and enter the slip road",
      "Move on and take the next exit",
    ],
    correct_answer: "Move on and take the next exit",
    user_answer: "Move on and take the next exit",
    is_correct: true,
  },
  {
    question_number: 26,
    question:
      "When dealing with pedestrians, it is important to remember that;",
    options: [
      "Pedestrians have the priority",
      "Pedestrians must know the traffic rules",
      "All pedestrians cross from the designated areas only",
    ],
    correct_answer: "Pedestrians have the priority",
    user_answer: "Pedestrians have the priority",
    is_correct: true,
  },
  {
    question_number: 27,
    question:
      "Due to their size, school children are most vulnerable in case of colliding with a vehicle. How?",
    options: [
      "The upper part of their body will come in contact with the vehicle which can be fatal",
      "They may be moving inside the school bus",
      "School children have priority",
    ],
    correct_answer:
      "The upper part of their body will come in contact with the vehicle which can be fatal",
    user_answer:
      "The upper part of their body will come in contact with the vehicle which can be fatal",
    is_correct: true,
  },
  {
    question_number: 28,
    question:
      "As a driver, your driving must not expose pedestrians to any danger. It means;",
    options: [
      "You shall expect pedestrians to avoid you",
      "You shall stop whenever required, in order to avoid danger",
      "The pedestrians must only cross at the pedestrian crossings",
    ],
    correct_answer:
      "You shall stop whenever required, in order to avoid danger",
    user_answer: "The pedestrians must only cross at the pedestrian crossings",
    is_correct: false,
  },
  {
    question_number: 29,
    question:
      "Driving in heavily congested traffic can be particularly dangerous. Be more safe by;",
    options: [
      "Slowing down and watching for hazards",
      "Speeding up to reach destination faster",
      "Patiently waiting at the junction",
    ],
    correct_answer: "Slowing down and watching for hazards",
    user_answer: "Slowing down and watching for hazards",
    is_correct: true,
  },
  {
    question_number: 30,
    question:
      "Staying in your lane is important. It is called lane discipline. Violation of Lane discipline in Dubai carries a fine of;",
    options: ["AED 1000.00", "AED 400.00", "AED 150.00"],
    correct_answer: "AED 400.00",
    user_answer: "AED 400.00",
    is_correct: true,
  },
  {
    question_number: 31,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 32,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "When a truck is turning into a congested roads, what can you do to make that turn easier?",
    options: [
      "Allow for more space to maneuver",
      "Position your car as you would with small cars",
      "Give yourself the priority",
    ],
    correct_answer: "Allow for more space to maneuver",
    user_answer: "Allow for more space to maneuver",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "You are entering a T-junction and a truck is turning your way. What should you do?",
    options: [
      "Speed up to turn ahead of the truck",
      "Stop closest to the stop line",
      "Allow for more space to turn",
    ],
    correct_answer: "Allow for more space to turn",
    user_answer: "Allow for more space to turn",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "Why should you exercise patience when following a slow moving truck?",
    options: [
      "Trucks are supposed to be slow",
      "Its load may be too heavy to move faster",
      "It is best to overtake quickly",
    ],
    correct_answer: "Its load may be too heavy to move faster",
    user_answer: "Its load may be too heavy to move faster",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "As a safe driver dealing with heavy trucks on the road, what should you avoid doing?",
    options: [
      "Argue with the truck driver who may be tired due to long working hours.",
      "Allow more space especially whentrucks are turning into your wayespecially at T-Junctions",
      "Position yourself where the truck driver can easily see you.",
    ],
    correct_answer:
      "Argue with the truck driver who may be tired due to long working hours.",
    user_answer:
      "Allow more space especially whentrucks are turning into your wayespecially at T-Junctions",
    is_correct: false,
  },
  {
    question_number: 37,
    question:
      "Not giving way to convoy or emergency vehicles can lead to AED 3000 fine and;",
    options: [
      "6 black points",
      "10 day vehicle confiscation",
      "20 black points",
    ],
    correct_answer: "6 black points",
    user_answer: "6 black points",
    is_correct: true,
  },
  {
    question_number: 38,
    question: "What does this sign mean?",
    options: [
      "Parking for electric cars",
      "Parking for Bicycles",
      "Electric cars charging Only",
    ],
    correct_answer: "Electric cars charging Only",
    user_answer: "Electric cars charging Only",
    is_correct: true,
  },
  {
    question_number: 39,
    question: "Before making a turn or changing lane, it is important to;",
    options: [
      "Take note of the vehicles plate",
      "Leave a safe gap from the vehicle behind",
      "Signal your intention for a reasonable time",
    ],
    correct_answer: "Signal your intention for a reasonable time",
    user_answer: "Leave a safe gap from the vehicle behind",
    is_correct: false,
  },
  {
    question_number: 40,
    question: "When dealing with Tram movement, priority is always given to;",
    options: ["Pedestrians", "Tram", "motorcycles"],
    correct_answer: "Tram",
    user_answer: "Tram",
    is_correct: true,
  },
  {
    question_number: 41,
    question:
      "Tram movement have priority over other road users in the Tram right of Way, except:",
    options: [
      "Speeding cars",
      "Pedestrians",
      "Army vehicles when moving in convoy.",
    ],
    correct_answer: "Army vehicles when moving in convoy.",
    user_answer: "Army vehicles when moving in convoy.",
    is_correct: true,
  },
  {
    question_number: 42,
    question:
      "A bus or tram route with one direction of travel. This sign indicates the;",
    options: [
      "actual direction or approach of the next bus or tram",
      "actual direction of travel for pedestrians",
      "actual direction of travel going to bus or tram depot",
    ],
    correct_answer: "actual direction or approach of the next bus or tram",
    user_answer: "actual direction of travel going to bus or tram depot",
    is_correct: false,
  },
  {
    question_number: 43,
    question: "Interrupting the tram movement carries heavy penalty including;",
    options: [
      "Maximum AED 30,000 fines or license impounding",
      "Maximum AED 30,000 fines and license impounding",
      "License impounding and vehicle impounding",
    ],
    correct_answer: "Maximum AED 30,000 fines and license impounding",
    user_answer: "Maximum AED 30,000 fines and license impounding",
    is_correct: true,
  },
  {
    question_number: 44,
    question:
      "You are positioned on the left most lane of the road but you intend to go straight, what should you do if you see this sign?",
    options: [
      "keep to your lane",
      "use hazard lights and change one lane to the right",
      "check your mirrors, use indicator and change to the right lane when safe",
    ],
    correct_answer:
      "check your mirrors, use indicator and change to the right lane when safe",
    user_answer:
      "check your mirrors, use indicator and change to the right lane when safe",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "In the event of a collision, the color of the accident report means following;",
    options: [
      "pink is issued to the driver at fault",
      "green is issued to the driver at fault",
      "white is issued to the driver at fault",
    ],
    correct_answer: "pink is issued to the driver at fault",
    user_answer: "white is issued to the driver at fault",
    is_correct: false,
  },
  {
    question_number: 46,
    question:
      "Eco-friendly driving habits help protect the environment. It can also;",
    options: [
      "help save money on fuel",
      "help save time and money",
      "help save money and water",
    ],
    correct_answer: "help save money on fuel",
    user_answer: "help save money on fuel",
    is_correct: true,
  },
  {
    question_number: 47,
    question:
      "Why is it important to stop in a safe place away from traffic if involved in a crash without injuries?",
    options: [
      "to avoid obstructing the traffic and creating a traffic jam",
      "to enable inspecting the vehicle and be able to leave immediately",
      "to avoid being blamed for the crash",
    ],
    correct_answer:
      "to avoid obstructing the traffic and creating a traffic jam",
    user_answer: "to avoid obstructing the traffic and creating a traffic jam",
    is_correct: true,
  },
  {
    question_number: 48,
    question:
      "Each of these vehicle is about to turn right at the roundabout. Which vehicle is in the correct and safer position to turn right?",
    options: [
      "both vehicle A and vehicle B",
      "vehicle B only",
      "vehicle A only",
    ],
    correct_answer: "vehicle B only",
    user_answer: "vehicle B only",
    is_correct: true,
  },
  {
    question_number: 49,
    question:
      "You are driving car A. What does this diagram say about following distance?",
    options: [
      "in good driving conditions there should be about a one second gap between you and the car in front",
      "in good driving conditions there should be at least a two second gap between you and the car in front",
      "there is no parking allowed",
    ],
    correct_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    user_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    is_correct: true,
  },
  {
    question_number: 50,
    question: "Driving conditions on a road will be",
    options: [
      "worse in dry weather.",
      "worse in wet weather.",
      "the same in dry or wet weather.",
    ],
    correct_answer: "worse in wet weather.",
    user_answer: "worse in wet weather.",
    is_correct: true,
  },
  {
    question_number: 1,
    question:
      "Pedestrians are using pedestrian lights to cross the road you are turning into. When must you give way to the pedestrians?",
    options: [
      "Only when the pedestrian lights show a green walking figure",
      "Always",
      "Never",
    ],
    correct_answer: "Always",
    user_answer: "Only when the pedestrian lights show a green walking figure",
    is_correct: false,
  },
  {
    question_number: 2,
    question: "When driving through flood, it is important to be both",
    options: [
      "Fast and safe.",
      "Safe and Aggressive.",
      "Cautious & Courteous.",
    ],
    correct_answer: "Cautious & Courteous.",
    user_answer: "Fast and safe.",
    is_correct: false,
  },
  {
    question_number: 3,
    question: "For regular saloon cars, do not drive through if",
    options: [
      "the flood is more than 50% of the tire height",
      "the flood is just starting",
      "the flood is starting to subside.",
    ],
    correct_answer: "the flood is more than 50% of the tire height",
    user_answer: "the flood is more than 50% of the tire height",
    is_correct: true,
  },
  {
    question_number: 4,
    question: "Mobile phones distract drivers and cause them to",
    options: [
      "change direction suddenly.",
      "maintain focus on the road",
      "use other routes",
    ],
    correct_answer: "change direction suddenly.",
    user_answer: "maintain focus on the road",
    is_correct: false,
  },
  {
    question_number: 5,
    question: "Driving too fast for the situation is",
    options: [
      "an unacceptable driving behavior.",
      "a proper way of driving.",
      "just the way other people drive.",
    ],
    correct_answer: "an unacceptable driving behavior.",
    user_answer: "just the way other people drive.",
    is_correct: false,
  },
  {
    question_number: 6,
    question: "Most appropriate use of the fast lane is when",
    options: [
      "rushing to your destination",
      "overtaking only",
      "overtaking and turning right ahead",
    ],
    correct_answer: "overtaking only",
    user_answer: "rushing to your destination",
    is_correct: false,
  },
  {
    question_number: 7,
    question: "Driving in a safe manner",
    options: [
      "can be done by all drivers if they decide to.",
      "can be done in the presence of the police",
      "can be done in urban areas",
    ],
    correct_answer: "can be done by all drivers if they decide to.",
    user_answer: "can be done in the presence of the police",
    is_correct: false,
  },
  {
    question_number: 8,
    question: "Make your journey safer and more pleasant by",
    options: [
      "planning journey in advance.",
      "travelling during good weather only",
      "travelling with good companions only.",
    ],
    correct_answer: "planning journey in advance.",
    user_answer: "planning journey in advance.",
    is_correct: true,
  },
  {
    question_number: 9,
    question:
      "What should you do when a worker on the road in front of you is holding this sign?",
    options: [
      "Proceed at the speed limit",
      "Drive slowly and observe any directions from the road worker.",
      "Stop and wait until the car behind you sounds the horn",
    ],
    correct_answer:
      "Drive slowly and observe any directions from the road worker.",
    user_answer:
      "Drive slowly and observe any directions from the road worker.",
    is_correct: true,
  },
  {
    question_number: 10,
    question: "What does this sign mean?",
    options: [
      "Vehicles must stop and give way",
      "Pedestrians must stop",
      "Vehicles must stop only when another vehicle is coming",
    ],
    correct_answer: "Vehicles must stop and give way",
    user_answer: "Pedestrians must stop",
    is_correct: false,
  },
  {
    question_number: 11,
    question:
      "What is one way of telling that you are becoming a more skilled driver?",
    options: [
      "If you are driving at a time when you would normally have been sleeping.",
      "After you drink your coffee",
      "After you fail to take your medication",
    ],
    correct_answer:
      "If you are driving at a time when you would normally have been sleeping.",
    user_answer:
      "If you are driving at a time when you would normally have been sleeping.",
    is_correct: true,
  },
  {
    question_number: 12,
    question: "In an uncontrolled roundabout, priority is given to",
    options: [
      "Vehicles coming from the right",
      "Vehicles coming from the left",
      "Vehicles signaling to turn left",
    ],
    correct_answer: "Vehicles coming from the right",
    user_answer: "Vehicles coming from the left",
    is_correct: false,
  },
  {
    question_number: 13,
    question:
      "Who is the best person to decide whether a medicine might affect your driving?",
    options: ["your doctor or a pharmacist", "you", "your driving instructor"],
    correct_answer: "your doctor or a pharmacist",
    user_answer: "your doctor or a pharmacist",
    is_correct: true,
  },
  {
    question_number: 14,
    question: "What does this sign mean?",
    options: [
      "Prohibits exceeding the 80 kph speed limit.",
      "Mandatory, up to 80 kph only.",
      "Warning, do not exceed 80 kph.",
    ],
    correct_answer: "Prohibits exceeding the 80 kph speed limit.",
    user_answer: "Mandatory, up to 80 kph only.",
    is_correct: false,
  },
  {
    question_number: 15,
    question:
      "In driving, hazard is defined as anything that can cause the driver to change direction, position or speed of the vehicle. Which one is a hazard?",
    options: [
      "A give way sign ahead",
      "A roundabout ahead",
      "Children playing",
    ],
    correct_answer: "Children playing",
    user_answer: "A roundabout ahead",
    is_correct: false,
  },
  {
    question_number: 16,
    question:
      "You are feeling sleepy but you decided to drive for an important appointment.",
    options: [
      "You are now a hazard to your self",
      "You are now a hazard to others",
      "You are now a hazard to your self and to others",
    ],
    correct_answer: "You are now a hazard to your self and to others",
    user_answer: "You are now a hazard to your self and to others",
    is_correct: true,
  },
  {
    question_number: 17,
    question:
      "In a collision, what is the danger to driver or passengers who are not wearing a seat belt?",
    options: [
      "The vehicle may stop suddenly but unbelted passengers continue to move",
      "The vehicle may stop suddenly, unbelted passengers also stop",
      "The unbelted passengers remain inside the vehicle",
    ],
    correct_answer:
      "The vehicle may stop suddenly but unbelted passengers continue to move",
    user_answer: "The vehicle may stop suddenly, unbelted passengers also stop",
    is_correct: false,
  },
  {
    question_number: 18,
    question:
      "In a crash, a driver wearing a seat belt has a chance to control the vehicle because;",
    options: [
      "All passengers must wear seat belt",
      "Seat belts holds you securely in place",
      "Seat belt is required by law",
    ],
    correct_answer: "Seat belts holds you securely in place",
    user_answer: "Seat belts holds you securely in place",
    is_correct: true,
  },
  {
    question_number: 19,
    question:
      "Poor visibility due to adverse condition like heavy rain or fog may affect the efficiency of this safety system.",
    options: [
      "Forward Collision Mitigation",
      "Conventional Cruise Control",
      "Anti-Lock Brake System",
    ],
    correct_answer: "Forward Collision Mitigation",
    user_answer: "Forward Collision Mitigation",
    is_correct: true,
  },
  {
    question_number: 20,
    question:
      "Plan ahead if you are travelling somewhere that is not familiar to you. It helps;",
    options: [
      "In planning your trip",
      "Reduce the distraction in the car",
      "Reduce the stress of driving",
    ],
    correct_answer: "Reduce the stress of driving",
    user_answer: "In planning your trip",
    is_correct: false,
  },
  {
    question_number: 21,
    question:
      "Allowing for longer gap between your vehicle and other vehicles mean you;",
    options: [
      "Allow for unexpected actions of other drivers",
      "Allow more space for more passengers",
      "Allow other vehicles to pass you on the right side",
    ],
    correct_answer: "Allow for unexpected actions of other drivers",
    user_answer: "Allow for unexpected actions of other drivers",
    is_correct: true,
  },
  {
    question_number: 22,
    question:
      "If you are driving at night on rural roads, you can clearly see as far as;",
    options: [
      "20 meters",
      "The range of your headlights",
      "The length of your vehicle",
    ],
    correct_answer: "The range of your headlights",
    user_answer: "The range of your headlights",
    is_correct: true,
  },
  {
    question_number: 23,
    question:
      "You need to increase following distance when driving during the night. Why?",
    options: [
      "So you will have more time to react",
      "So you will have more time to rest",
      "It is better to drive during day time",
    ],
    correct_answer: "So you will have more time to react",
    user_answer: "So you will have more time to react",
    is_correct: true,
  },
  {
    question_number: 24,
    question: "Which of the signs warn you of approaching a school zone?",
    options: ["A", "B", "C"],
    correct_answer: "C",
    user_answer: "C",
    is_correct: true,
  },
  {
    question_number: 25,
    question:
      "You risk being fined, jailed or your license confiscated and your vehicle impounded if;",
    options: [
      "You drive under the influence of alcohol or drugs",
      "You do not stop at a stop sign",
      "You cross a red traffic light",
    ],
    correct_answer: "You drive under the influence of alcohol or drugs",
    user_answer: "You drive under the influence of alcohol or drugs",
    is_correct: true,
  },
  {
    question_number: 26,
    question:
      "Crash risks increases if you do not use your indicators while changing lane because:",
    options: [
      "Older drivers are naturally slow to react",
      "Other drivers already know the unexpected lane change",
      "Other drivers are not prepared for unexpected lane change",
    ],
    correct_answer: "Other drivers are not prepared for unexpected lane change",
    user_answer: "Other drivers are not prepared for unexpected lane change",
    is_correct: true,
  },
  {
    question_number: 27,
    question:
      "This action can disrupt the smooth flow of traffic and endanger other road users.",
    options: [
      "Leaving the main road by cutting in at the end of the slip road.",
      "Slowing down when inside the slip road",
      "Signaling intention before leaving slip road",
    ],
    correct_answer:
      "Leaving the main road by cutting in at the end of the slip road.",
    user_answer:
      "Leaving the main road by cutting in at the end of the slip road.",
    is_correct: true,
  },
  {
    question_number: 28,
    question:
      "How do you safely exit the main road and without disturbing the flow of traffic?",
    options: [
      "Signal your intention, cut-in at the end of the slip road.",
      "Signal your intention, enter the slip road early",
      "Without using the indicator, enter the slip road early",
    ],
    correct_answer: "Signal your intention, enter the slip road early",
    user_answer: "Signal your intention, cut-in at the end of the slip road.",
    is_correct: false,
  },
  {
    question_number: 29,
    question:
      "You are not very sure how some pedestrians will react. How would you deal with this safely?",
    options: [
      "Lower your speed, ensure you can give way or stop if necessary",
      "Sound your horn repeatedly and loudly",
      "Assume the pedestrian has seen you.",
    ],
    correct_answer:
      "Lower your speed, ensure you can give way or stop if necessary",
    user_answer:
      "Lower your speed, ensure you can give way or stop if necessary",
    is_correct: true,
  },
  {
    question_number: 30,
    question:
      "When dealing with pedestrians, it is important to remember that;",
    options: [
      "Pedestrians have the priority",
      "Pedestrians must know the traffic rules",
      "All pedestrians cross from the designated areas only",
    ],
    correct_answer: "Pedestrians have the priority",
    user_answer: "Pedestrians have the priority",
    is_correct: true,
  },
  {
    question_number: 31,
    question: "One of the ways to drive safely around school children is to;",
    options: [
      "Keep using the horn in their presence.",
      "Anticipate sudden movements especially around school buses",
      "Assume they know how to behave in traffic",
    ],
    correct_answer:
      "Anticipate sudden movements especially around school buses",
    user_answer: "Anticipate sudden movements especially around school buses",
    is_correct: true,
  },
  {
    question_number: 32,
    question:
      "What can happen if another road user throws garbage or debris on the road way?",
    options: [
      "Other drivers will do the same",
      "A chain collision can happen",
      "All vehicles will stop",
    ],
    correct_answer: "A chain collision can happen",
    user_answer: "A chain collision can happen",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "Staying in your lane is important. It is called lane discipline. Violation of Lane discipline in Dubai carries a fine of;",
    options: ["AED 1000.00", "AED 400.00", "AED 150.00"],
    correct_answer: "AED 400.00",
    user_answer: "AED 400.00",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "As a sensible and responsible driver on the road, avoid doing this to truck drivers.",
    options: [
      "Blasting your horn with intention to force the driver to drive faster",
      "Consider the driver’s condition who could be tired due to long working hours",
      "Keep a longer following distance when driving or stopping behind them.",
    ],
    correct_answer:
      "Blasting your horn with intention to force the driver to drive faster",
    user_answer:
      "Blasting your horn with intention to force the driver to drive faster",
    is_correct: true,
  },
  {
    question_number: 37,
    question: "If you need to, how would you pass a motorcycle?",
    options: [
      "Make sure to give a loud horn when passing",
      "Passing a motorcycle from the right side is fine",
      "Provide enough space as you would a car",
    ],
    correct_answer: "Provide enough space as you would a car",
    user_answer: "Provide enough space as you would a car",
    is_correct: true,
  },
  {
    question_number: 38,
    question: "Before making a turn or changing lane, it is important to;",
    options: [
      "Take note of the vehicles plate",
      "Leave a safe gap from the vehicle behind",
      "Signal your intention for a reasonable time",
    ],
    correct_answer: "Signal your intention for a reasonable time",
    user_answer: "Signal your intention for a reasonable time",
    is_correct: true,
  },
  {
    question_number: 39,
    question:
      "If your vehicle breaks down on the road, think of your safety and;",
    options: [
      "do not stand in front of your vehicle",
      "avoid being distracted",
      "take the nearest exit or turn",
    ],
    correct_answer: "do not stand in front of your vehicle",
    user_answer: "take the nearest exit or turn",
    is_correct: false,
  },
  {
    question_number: 40,
    question:
      "You see a gap, a chance to overtake near a pedestrian crossing. What should you do?",
    options: ["Overtake carefully", "Do not overtake", "Stop"],
    correct_answer: "Do not overtake",
    user_answer: "Do not overtake",
    is_correct: true,
  },
  {
    question_number: 41,
    question:
      "If a vehicle involved in accident is damaged, repairs will not be carried out if;",
    options: [
      "a police report comes in white form",
      "a police report comes in red form",
      "no police report is presented during the time of repairs.",
    ],
    correct_answer: "no police report is presented during the time of repairs.",
    user_answer: "a police report comes in white form",
    is_correct: false,
  },
  {
    question_number: 42,
    question:
      "A police report issued in white form signifies that neither party is at fault or;",
    options: [
      "both parties are at fault",
      "that the other party is unknown",
      "that the green form is not at fault",
    ],
    correct_answer: "that the other party is unknown",
    user_answer: "both parties are at fault",
    is_correct: false,
  },
  {
    question_number: 43,
    question: "One of the many ways to drive in an eco friendly manner is;",
    options: [
      "maintaining shorter following distance with other vehicles",
      "gradual acceleration and braking",
      "more aggressive acceleration and braking",
    ],
    correct_answer: "gradual acceleration and braking",
    user_answer: "gradual acceleration and braking",
    is_correct: true,
  },
  {
    question_number: 44,
    question:
      "Vehicle A is travelling on a main road. Vehicle B wants to join the main road. Which vehicle has the priority?",
    options: [
      "vehicle B has the priority",
      "vehicle A has the priority",
      "both vehicles have the same priority",
    ],
    correct_answer: "vehicle A has the priority",
    user_answer: "vehicle A has the priority",
    is_correct: true,
  },
  {
    question_number: 45,
    question:
      "When reporting a traffic accident using the Dubai Police App, which 3 information is required:",
    options: [
      "injured passengers, mobile number, liable vehicle",
      "vehicle plate number, license number, picture of damages",
      "picture of damages, email address, vehicle plate number",
    ],
    correct_answer: "vehicle plate number, license number, picture of damages",
    user_answer: "vehicle plate number, license number, picture of damages",
    is_correct: true,
  },
  {
    question_number: 46,
    question: "Which vehicle must give way?",
    options: [
      "the vehicle that gets to the intersection last",
      "vehicle B",
      "vehicle A",
    ],
    correct_answer: "vehicle B",
    user_answer: "vehicle B",
    is_correct: true,
  },
  {
    question_number: 47,
    question:
      "You are the driver of vehicle A. You are parked and about to enter the stream of traffic. You must give way to",
    options: [
      "vehicle B only",
      "the bike rider only",
      "both the bike rider and vehicle B",
    ],
    correct_answer: "both the bike rider and vehicle B",
    user_answer: "both the bike rider and vehicle B",
    is_correct: true,
  },
  {
    question_number: 48,
    question:
      "You are driving in heavy traffic. Your lane is blocked by vehicle turning left. What should you do?",
    options: [
      "wait until the vehicle turns, then proceed",
      "sound your horn until the vehicle turns",
      "try to drive around on the footpath to the right of the vehicle",
    ],
    correct_answer: "wait until the vehicle turns, then proceed",
    user_answer: "wait until the vehicle turns, then proceed",
    is_correct: true,
  },
  {
    question_number: 49,
    question: "Extra care must be taken when driving near schools because",
    options: [
      "young kids may cross the road without looking",
      "speed limits are different in these areas",
      "young kids are playing in these areas",
    ],
    correct_answer: "young kids may cross the road without looking",
    user_answer: "young kids may cross the road without looking",
    is_correct: true,
  },
  {
    question_number: 50,
    question:
      "You are driving car A. What does this diagram say about following distance?",
    options: [
      "in good driving conditions there should be about a one second gap between you and the car in front",
      "in good driving conditions there should be at least a two second gap between you and the car in front",
      "there is no parking allowed",
    ],
    correct_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    user_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    is_correct: true,
  },
  {
    question_number: 1,
    question: "How should you drive into a bend in the road?",
    options: [
      "Accelerate a little.",
      "Slow down gradually.",
      "Continue at the same speed.",
    ],
    correct_answer: "Slow down gradually.",
    user_answer: "Slow down gradually.",
    is_correct: true,
  },
  {
    question_number: 2,
    question: "Increase your following distance. You need it for safety.",
    options: [
      "Most required, most of the time.",
      "Required only during foggy conditions.",
      "Most required to escape from the fog as quickly as possible.",
    ],
    correct_answer: "Most required, most of the time.",
    user_answer: "Required only during foggy conditions.",
    is_correct: false,
  },
  {
    question_number: 3,
    question: "If you must drive through flood, it is best to",
    options: [
      "Engage the assistance of other drivers.",
      "Engage low gear, low speed while maintaining low engine",
      "Engage low gear, low speed, rev the engine while slipping the clutch.",
    ],
    correct_answer:
      "Engage low gear, low speed, rev the engine while slipping the clutch.",
    user_answer: "Engage low gear, low speed while maintaining low engine",
    is_correct: false,
  },
  {
    question_number: 4,
    question: "The best way to deal with drivers signaling to turn is",
    options: [
      "To intentionally push in",
      "To intentionally block their path.",
      "To give way and allow to turn",
    ],
    correct_answer: "To give way and allow to turn",
    user_answer: "To give way and allow to turn",
    is_correct: true,
  },
  {
    question_number: 5,
    question: "Driving in a safe manner",
    options: [
      "can be done by all drivers if they decide to.",
      "can be done in the presence of the police",
      "can be done in urban areas",
    ],
    correct_answer: "can be done by all drivers if they decide to.",
    user_answer: "can be done by all drivers if they decide to.",
    is_correct: true,
  },
  {
    question_number: 6,
    question: "Make your journey safer and more pleasant by",
    options: [
      "planning journey in advance.",
      "travelling during good weather only",
      "travelling with good companions only.",
    ],
    correct_answer: "planning journey in advance.",
    user_answer: "planning journey in advance.",
    is_correct: true,
  },
  {
    question_number: 7,
    question: "Driving in a relaxed manner can be achieved by",
    options: [
      "not driving when intoxicated.",
      "using indicators always",
      "driving at slow lane when possible.",
    ],
    correct_answer: "driving at slow lane when possible.",
    user_answer: "using indicators always",
    is_correct: false,
  },
  {
    question_number: 8,
    question: "After making the turn with the indicator on,",
    options: [
      "Indicator will always turn off by itself.",
      "Check that it is turned off.",
      "Indicator can be left on.",
    ],
    correct_answer: "Check that it is turned off.",
    user_answer: "Check that it is turned off.",
    is_correct: true,
  },
  {
    question_number: 9,
    question:
      "When you have developed the skill to control your car you will then know",
    options: [
      "all there is to know about driving",
      "how to drive safely on the road",
      "only one of the many driving skills",
    ],
    correct_answer: "how to drive safely on the road",
    user_answer: "only one of the many driving skills",
    is_correct: false,
  },
  {
    question_number: 10,
    question: "What does this sign mean?",
    options: [
      "Intersection with undivided road and two-way traffic ahead",
      "Direction signs on internal roads",
      "No overtaking",
    ],
    correct_answer:
      "Intersection with undivided road and two-way traffic ahead",
    user_answer: "Intersection with undivided road and two-way traffic ahead",
    is_correct: true,
  },
  {
    question_number: 11,
    question: "When overtaking, the road markings will",
    options: [
      "indicate if it is allowed",
      "indicate the maximum speed",
      "indicate if it is safe",
    ],
    correct_answer: "indicate if it is allowed",
    user_answer: "indicate if it is allowed",
    is_correct: true,
  },
  {
    question_number: 12,
    question: "Which of these signs mean you must give way?",
    options: ["A", "B", "C"],
    correct_answer: "B",
    user_answer: "A",
    is_correct: false,
  },
  {
    question_number: 13,
    question:
      "Vehicle A and B have collided. The most likely cause of the collision is that",
    options: [
      "vehicle A was travelling too quickly",
      "vehicle B was follwing vehicle A too closely",
      "vehicle A stopped too quickly",
    ],
    correct_answer: "vehicle B was follwing vehicle A too closely",
    user_answer: "vehicle B was follwing vehicle A too closely",
    is_correct: true,
  },
  {
    question_number: 14,
    question:
      "Who is the best person to decide whether a medicine might affect your driving?",
    options: ["your doctor or a pharmacist", "you", "your driving instructor"],
    correct_answer: "your doctor or a pharmacist",
    user_answer: "your doctor or a pharmacist",
    is_correct: true,
  },
  {
    question_number: 15,
    question: "This sign means must keep to the left:",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "C",
    is_correct: false,
  },
  {
    question_number: 16,
    question: "What does this sign mean?",
    options: [
      "Parking area for handicapped drivers only.",
      "Handicapped drivers on training may turn right.",
      "Vehicles with handicapped stickers may park on the left.",
    ],
    correct_answer: "Parking area for handicapped drivers only.",
    user_answer: "Parking area for handicapped drivers only.",
    is_correct: true,
  },
  {
    question_number: 17,
    question:
      "Avoiding hazards and staying safe require skills to anticipate and forecast what may happen and;",
    options: [
      "Be able to quickly recognize the decision of the other driver",
      "Be able to quickly assign identify the driving skills of the other driver",
      "Be able to make quick decision on the appropriate actions/reactions.",
    ],
    correct_answer:
      "Be able to make quick decision on the appropriate actions/reactions.",
    user_answer:
      "Be able to make quick decision on the appropriate actions/reactions.",
    is_correct: true,
  },
  {
    question_number: 18,
    question:
      "You are feeling sleepy but you decided to drive for an important appointment.",
    options: [
      "You are now a hazard to your self",
      "You are now a hazard to others",
      "You are now a hazard to your self and to others",
    ],
    correct_answer: "You are now a hazard to your self and to others",
    user_answer: "You are now a hazard to your self and to others",
    is_correct: true,
  },
  {
    question_number: 19,
    question:
      "In a collision, what is the danger to driver or passengers who are not wearing a seat belt?",
    options: [
      "The vehicle may stop suddenly but unbelted passengers continue to move",
      "The vehicle may stop suddenly, unbelted passengers also stop",
      "The unbelted passengers remain inside the vehicle",
    ],
    correct_answer:
      "The vehicle may stop suddenly but unbelted passengers continue to move",
    user_answer:
      "The vehicle may stop suddenly but unbelted passengers continue to move",
    is_correct: true,
  },
  {
    question_number: 20,
    question: "As a requirement, pregnant women are;",
    options: [
      "Are also required to wear seat belt",
      "Are not required to wear seat belt",
      "To be seated in the front seat only",
    ],
    correct_answer: "Are also required to wear seat belt",
    user_answer: "Are also required to wear seat belt",
    is_correct: true,
  },
  {
    question_number: 21,
    question:
      "Plan ahead if you are travelling somewhere that is not familiar to you. It helps;",
    options: [
      "In planning your trip",
      "Reduce the distraction in the car",
      "Reduce the stress of driving",
    ],
    correct_answer: "Reduce the stress of driving",
    user_answer: "In planning your trip",
    is_correct: false,
  },
  {
    question_number: 22,
    question: "If you find yourself tailgating another vehicle, it is best to;",
    options: [
      "Sound horn and warn other drivers of your speed",
      "Speed up and let the other vehicle move to another lane",
      "Slow down and increase the following distance",
    ],
    correct_answer: "Slow down and increase the following distance",
    user_answer: "Sound horn and warn other drivers of your speed",
    is_correct: false,
  },
  {
    question_number: 23,
    question:
      "Allowing for longer gap between your vehicle and other vehicles mean you;",
    options: [
      "Allow for unexpected actions of other drivers",
      "Allow more space for more passengers",
      "Allow other vehicles to pass you on the right side",
    ],
    correct_answer: "Allow for unexpected actions of other drivers",
    user_answer: "Allow for unexpected actions of other drivers",
    is_correct: true,
  },
  {
    question_number: 24,
    question:
      "Keep your speed down and you will have time to react. This is especially important when;",
    options: [
      "Driving an ambulance",
      "Driving at night",
      "Driving on the fast lane of the free way",
    ],
    correct_answer: "Driving at night",
    user_answer: "Driving an ambulance",
    is_correct: false,
  },
  {
    question_number: 25,
    question:
      "If a driver is weaving in and out of traffic without indicating, it is most likely due to;",
    options: [
      "Bad attitude of behavior of the driver",
      "Faulty accelerator of the car",
      "Need of the brakes to be replaced",
    ],
    correct_answer: "Bad attitude of behavior of the driver",
    user_answer: "Bad attitude of behavior of the driver",
    is_correct: true,
  },
  {
    question_number: 26,
    question: "If you find that you have less time to react, it means you;",
    options: [
      "Need to reduce your speed",
      "Need to increase your speed",
      "Need to drive less",
    ],
    correct_answer: "Need to reduce your speed",
    user_answer: "Need to increase your speed",
    is_correct: false,
  },
  {
    question_number: 27,
    question: "If you are frequently tailgating other drivers, this may;",
    options: [
      "Increase the risk of a crash",
      "Increase your safety",
      "Increase the following distance",
    ],
    correct_answer: "Increase the risk of a crash",
    user_answer: "Increase the risk of a crash",
    is_correct: true,
  },
  {
    question_number: 28,
    question:
      "A slip road on a highway is provided a good distance from the start to the end. Why?",
    options: [
      "To allow merging vehicles to accelerate and join the traffic smoothly",
      "To allow for several vehicles to stop and wait",
      "To allow for other vehicles to overtake",
    ],
    correct_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    user_answer:
      "To allow merging vehicles to accelerate and join the traffic smoothly",
    is_correct: true,
  },
  {
    question_number: 29,
    question:
      "It is important not to do this to safely leave the main stream of traffic.",
    options: [
      "Signal your intention to leave the traffic",
      "Cut in and drive over the chevron markings",
      "Reduce speed once inside the slip road",
    ],
    correct_answer: "Cut in and drive over the chevron markings",
    user_answer: "Signal your intention to leave the traffic",
    is_correct: false,
  },
  {
    question_number: 30,
    question:
      "You are driving on a highway and you just missed your exit. What is the safest action?",
    options: [
      "Switch on hazard lights and stop",
      "Stop, reverse and enter the slip road",
      "Move on and take the next exit",
    ],
    correct_answer: "Move on and take the next exit",
    user_answer: "Move on and take the next exit",
    is_correct: true,
  },
  {
    question_number: 31,
    question:
      "Safely deal with pedestrians by applying the 3 SSS. The 3 SSS stand for;",
    options: [
      "Stop, Step, Steer",
      "Sound, Stop, Space",
      "Space, Speed and Sound",
    ],
    correct_answer: "Space, Speed and Sound",
    user_answer: "Sound, Stop, Space",
    is_correct: false,
  },
  {
    question_number: 32,
    question:
      "How can throwing any debris or garbage on the road be dangerous?",
    options: [
      "Some road users may react in an unpredictable manner",
      "Large vehicles are not affected by debris",
      "Some vehicles are turning right",
    ],
    correct_answer: "Some road users may react in an unpredictable manner",
    user_answer: "Some vehicles are turning right",
    is_correct: false,
  },
  {
    question_number: 33,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 35,
    question:
      "If you are passing a truck on a highway, why should you hold your steering firmly?",
    options: [
      "The turbulence around the vehicle may cause vibration on the steering",
      "The truck may wobble",
      "The space around the truck is restricted",
    ],
    correct_answer:
      "The turbulence around the vehicle may cause vibration on the steering",
    user_answer: "The space around the truck is restricted",
    is_correct: false,
  },
  {
    question_number: 36,
    question:
      "When following a motorcycle, it is important not to tail gate because;",
    options: [
      "This may intimidate the rider and may result to loss of control.",
      "Motorcycles are required to give way to pedestrians",
      "Motorcycle riders must wear protective helmet",
    ],
    correct_answer:
      "This may intimidate the rider and may result to loss of control.",
    user_answer: "Motorcycles are required to give way to pedestrians",
    is_correct: false,
  },
  {
    question_number: 37,
    question:
      "When driving on busy streets, be particularly alert for people trying to cross and walking from;",
    options: [
      "Behind the tall buildings",
      "Front or behind vehicles that are stopped or moving slowly.",
      "Freeway exits",
    ],
    correct_answer:
      "Front or behind vehicles that are stopped or moving slowly.",
    user_answer: "Front or behind vehicles that are stopped or moving slowly.",
    is_correct: true,
  },
  {
    question_number: 38,
    question:
      "Not giving way to convoy or emergency vehicles can lead to AED 3000 fine and;",
    options: [
      "6 black points",
      "10 day vehicle confiscation",
      "20 black points",
    ],
    correct_answer: "6 black points",
    user_answer: "20 black points",
    is_correct: false,
  },
  {
    question_number: 39,
    question: "When giving way to emergency vehicles, it is;",
    options: [
      "Fine to cross the red signal",
      "Acceptable to use the road shoulders",
      "Not allowed to use the road shoulders",
    ],
    correct_answer: "Not allowed to use the road shoulders",
    user_answer: "Fine to cross the red signal",
    is_correct: false,
  },
  {
    question_number: 40,
    question: "Which type of vehicle is prohibited by this sign?",
    options: ["Bicycles", "Motorcycles", "Scooters"],
    correct_answer: "Motorcycles",
    user_answer: "Motorcycles",
    is_correct: true,
  },
  {
    question_number: 41,
    question:
      "Tram movement have priority over other road users in the Tram right of Way, except:",
    options: [
      "Speeding cars",
      "Pedestrians",
      "Army vehicles when moving in convoy.",
    ],
    correct_answer: "Army vehicles when moving in convoy.",
    user_answer: "Pedestrians",
    is_correct: false,
  },
  {
    question_number: 42,
    question:
      "You can see the brake lights of the vehicle in front of you light up. How do you react to this?",
    options: [
      "Be ready to slow down or stop",
      "Be ready accelerate",
      "Be ready to swerve to your left or right",
    ],
    correct_answer: "Be ready to slow down or stop",
    user_answer: "Be ready to slow down or stop",
    is_correct: true,
  },
  {
    question_number: 43,
    question: "One possible danger when overtaking a truck on an open road is;",
    options: [
      "presence of speed cameras on the road",
      "presence of other vehicles",
      "presence of strong winds",
    ],
    correct_answer: "presence of strong winds",
    user_answer: "presence of other vehicles",
    is_correct: false,
  },
  {
    question_number: 44,
    question:
      "As you enter the freeway, it is important to time your merge so that;",
    options: [
      "you do not cause other vehicles to alter their path or speed",
      "you are able to see the vehicles in front of you",
      "you are given priority by vehicles travelling on the freeway",
    ],
    correct_answer:
      "you do not cause other vehicles to alter their path or speed",
    user_answer: "you are given priority by vehicles travelling on the freeway",
    is_correct: false,
  },
  {
    question_number: 45,
    question:
      "This feature of the Dubai Police App is meant to connect users to the Dubai Police quickly;",
    options: ["SOS button", "e-crime", "Home security"],
    correct_answer: "SOS button",
    user_answer: "SOS button",
    is_correct: true,
  },
  {
    question_number: 46,
    question: "You are driving vehicle A. You must give way to",
    options: [
      "both the pedestrian and the motorcycle",
      "the pedestrian only",
      "the motorcycle only",
    ],
    correct_answer: "both the pedestrian and the motorcycle",
    user_answer: "both the pedestrian and the motorcycle",
    is_correct: true,
  },
  {
    question_number: 47,
    question: "You are driving vehicle A. What should you do?",
    options: [
      "wait until vehicle C has moved through the intersection",
      "wait until vehicle B has moved through the intersection",
      "continue to make the turn if it is safe to do so",
    ],
    correct_answer: "continue to make the turn if it is safe to do so",
    user_answer: "continue to make the turn if it is safe to do so",
    is_correct: true,
  },
  {
    question_number: 48,
    question: "Which vehicle is taking the safest path?",
    options: ["vehicle B", "vehicle A", "vehicle C"],
    correct_answer: "vehicle A",
    user_answer: "vehicle A",
    is_correct: true,
  },
  {
    question_number: 49,
    question: "Driving conditions on a road will be",
    options: [
      "worse in dry weather.",
      "worse in wet weather.",
      "the same in dry or wet weather.",
    ],
    correct_answer: "worse in wet weather.",
    user_answer: "worse in wet weather.",
    is_correct: true,
  },
  {
    question_number: 50,
    question: "People walking along or crossing the roads",
    options: [
      "should be warned with strong sound of horn.",
      "should be told by the enforcement people to stay away from cars.",
      "should be considered as among the many hazards on the road.",
    ],
    correct_answer:
      "should be considered as among the many hazards on the road.",
    user_answer: "should be considered as among the many hazards on the road.",
    is_correct: true,
  },
  {
    question_number: 1,
    question: "At what speed should you travel on the road?",
    options: [
      "At a speed shown on the speed limit signs",
      "At least 10 km/h below the speed limit signs.",
      "At a speed shown on a speed limit signs or slower, depending on the road conditions.",
    ],
    correct_answer:
      "At a speed shown on a speed limit signs or slower, depending on the road conditions.",
    user_answer:
      "At a speed shown on a speed limit signs or slower, depending on the road conditions.",
    is_correct: true,
  },
  {
    question_number: 2,
    question: "Foggy conditions can be patchy, this means",
    options: [
      "fog is clearing in some areas but foggy again in some areas",
      "Fog is consistently dense in some areas.",
      "fog has cleared, it is time to speed up.",
    ],
    correct_answer:
      "fog is clearing in some areas but foggy again in some areas",
    user_answer: "fog has cleared, it is time to speed up.",
    is_correct: false,
  },
  {
    question_number: 3,
    question: "Driving in flood is difficult because",
    options: [
      "flooding reduces the visibility.",
      "flood is very unpredictable.",
      "you cannot see if there are deep holes along the path.",
    ],
    correct_answer: "you cannot see if there are deep holes along the path.",
    user_answer: "you cannot see if there are deep holes along the path.",
    is_correct: true,
  },
  {
    question_number: 4,
    question: "The time you look for a name to call in your mobile phone",
    options: [
      "may result to a serious crash.",
      "saves some time off your travel.",
      "may avoid unnecessary delays",
    ],
    correct_answer: "may result to a serious crash.",
    user_answer: "saves some time off your travel.",
    is_correct: false,
  },
  {
    question_number: 5,
    question: "When driving, avoid this kind of behavior",
    options: [
      "Maintaining safe gap.",
      "Driving too close to the vehicle in front.",
      "Keeping to the slow lane.",
    ],
    correct_answer: "Driving too close to the vehicle in front.",
    user_answer: "Maintaining safe gap.",
    is_correct: false,
  },
  {
    question_number: 6,
    question: "Driving slowly on the fast lane is",
    options: [
      "equally dangerous as over speeding.",
      "a normal and acceptable driving.",
      "a sure and safe way to drive.",
    ],
    correct_answer: "equally dangerous as over speeding.",
    user_answer: "a sure and safe way to drive.",
    is_correct: false,
  },
  {
    question_number: 7,
    question: "Driving in a relaxed manner can be achieved by",
    options: [
      "not driving when intoxicated.",
      "using indicators always",
      "driving at slow lane when possible.",
    ],
    correct_answer: "driving at slow lane when possible.",
    user_answer: "driving at slow lane when possible.",
    is_correct: true,
  },
  {
    question_number: 8,
    question: "Proper use of indicator provide",
    options: [
      "other drivers time to stop",
      "other drivers time to react appropriately.",
      "direction to destination of other drivers",
    ],
    correct_answer: "other drivers time to react appropriately.",
    user_answer: "other drivers time to react appropriately.",
    is_correct: true,
  },
  {
    question_number: 9,
    question:
      "When parking your vehicle, it is important not to park at these areas:",
    options: [
      "entrances and exits to houses, parking areas and schools",
      "within the premises of houses, parking areas,and schools",
      "10 meters from intersections and infront of a public transport depot",
    ],
    correct_answer: "entrances and exits to houses, parking areas and schools",
    user_answer:
      "10 meters from intersections and infront of a public transport depot",
    is_correct: false,
  },
  {
    question_number: 10,
    question: "Where would you usually find this sign?",
    options: ["Inside the tunnel", "At hospital zone", "At school zone"],
    correct_answer: "At hospital zone",
    user_answer: "At school zone",
    is_correct: false,
  },
  {
    question_number: 11,
    question:
      "What is the speed limit in a residential area with single lane when there are no speed limit signs?",
    options: ["40 km/h", "50 km/h", "60 km/h"],
    correct_answer: "40 km/h",
    user_answer: "50 km/h",
    is_correct: false,
  },
  {
    question_number: 12,
    question: "Which sign means the road ahead is uneven?",
    options: ["A", "B", "C"],
    correct_answer: "A",
    user_answer: "C",
    is_correct: false,
  },
  {
    question_number: 13,
    question: "What is the main factor that helps you to be a better driver?",
    options: [
      "Being confident",
      "undertaking as many lessons as possible",
      "Being confident Tracklng difficult driving situations when you are a new driver",
    ],
    correct_answer: "undertaking as many lessons as possible",
    user_answer:
      "Being confident Tracklng difficult driving situations when you are a new driver",
    is_correct: false,
  },
  {
    question_number: 14,
    question: "Select the sign that means dual carriageway ends ahead",
    options: ["A", "B", "C"],
    correct_answer: "B",
    user_answer: "B",
    is_correct: true,
  },
  {
    question_number: 15,
    question: "New drivers have a high crash rate because they",
    options: [
      "have not done many hours of driving practice",
      "lack of confidence in their driving skills",
      "can be distracted by other peoples advice",
    ],
    correct_answer: "have not done many hours of driving practice",
    user_answer: "lack of confidence in their driving skills",
    is_correct: false,
  },
  {
    question_number: 16,
    question: "Which vehicle can overtake?",
    options: [
      "vehicle A",
      "vehicle B",
      "both, vehicle A and vehicle B can overtake if the road ahead is clear",
    ],
    correct_answer: "vehicle A",
    user_answer: "vehicle A",
    is_correct: true,
  },
  {
    question_number: 17,
    question: "Driving is more dangerous if you",
    options: [
      "have noisy passengers in your car",
      "do not keep your car clean and tidy",
      "go on long drive regularly",
    ],
    correct_answer: "have noisy passengers in your car",
    user_answer: "have noisy passengers in your car",
    is_correct: true,
  },
  {
    question_number: 18,
    question: "When should you start wearing the seat belt?",
    options: [
      "Once the vehicle is already moving",
      "As soon as you are seated in the vehicle",
      "Just before the trip is completed",
    ],
    correct_answer: "As soon as you are seated in the vehicle",
    user_answer: "Once the vehicle is already moving",
    is_correct: false,
  },
  {
    question_number: 19,
    question:
      "In a collision, what is the danger to driver or passengers who are not wearing a seat belt?",
    options: [
      "The vehicle may stop suddenly but unbelted passengers continue to move",
      "The vehicle may stop suddenly, unbelted passengers also stop",
      "The unbelted passengers remain inside the vehicle",
    ],
    correct_answer:
      "The vehicle may stop suddenly but unbelted passengers continue to move",
    user_answer: "The vehicle may stop suddenly, unbelted passengers also stop",
    is_correct: false,
  },
  {
    question_number: 20,
    question:
      "This safety system is designed to prevent collision with the vehicle in front.",
    options: [
      "Forward Collision Mitigation",
      "Anti-Lock brake System",
      "Electronic Stability Program",
    ],
    correct_answer: "Forward Collision Mitigation",
    user_answer: "Forward Collision Mitigation",
    is_correct: true,
  },
  {
    question_number: 21,
    question:
      "Plan ahead if you are travelling somewhere that is not familiar to you. It helps;",
    options: [
      "In planning your trip",
      "Reduce the distraction in the car",
      "Reduce the stress of driving",
    ],
    correct_answer: "Reduce the stress of driving",
    user_answer: "In planning your trip",
    is_correct: false,
  },
  {
    question_number: 22,
    question: "This helps to reduce your stress while driving.",
    options: [
      "Driving during rush hours",
      "Driving fast and arriving early",
      "Planning your trip in advance",
    ],
    correct_answer: "Planning your trip in advance",
    user_answer: "Planning your trip in advance",
    is_correct: true,
  },
  {
    question_number: 23,
    question:
      "UAE Traffic Law require drivers to use vehicle lights during night time as well as during the day where the view is unclear. Why?",
    options: [
      "Roads in the UAE are best for day time use only",
      "Road users are harder to see during night time",
      "Roads in the UAE have poor lighting",
    ],
    correct_answer: "Road users are harder to see during night time",
    user_answer: "Road users are harder to see during night time",
    is_correct: true,
  },
  {
    question_number: 24,
    question:
      "What is one way of telling that you are becoming more skilled as a driver?",
    options: [
      "You make correct decisions before your driver instructor tells you what to do.",
      "You get annoyed with other drivers when they make a mistake.",
      "You move off more quickly from stop signs.",
    ],
    correct_answer:
      "You make correct decisions before your driver instructor tells you what to do.",
    user_answer: "You get annoyed with other drivers when they make a mistake.",
    is_correct: false,
  },
  {
    question_number: 25,
    question:
      "You drive and stop at an intersection that has a red traffic light. Can you use a mobile phone while you wait for a change of lights?",
    options: [
      "Yes",
      "No",
      "Yes, but you must stop using the phone when the light turns green.",
    ],
    correct_answer: "No",
    user_answer:
      "Yes, but you must stop using the phone when the light turns green.",
    is_correct: false,
  },
  {
    question_number: 26,
    question:
      "You risk being fined, jailed or your license confiscated and your vehicle impounded if;",
    options: [
      "You drive under the influence of alcohol or drugs",
      "You do not stop at a stop sign",
      "You cross a red traffic light",
    ],
    correct_answer: "You drive under the influence of alcohol or drugs",
    user_answer: "You drive under the influence of alcohol or drugs",
    is_correct: true,
  },
  {
    question_number: 27,
    question:
      "What can happen if you start accelerating at the end of the slip road?",
    options: [
      "The traffic flow will flow freely",
      "You may disrupt the flow of traffic",
      "The traffic flow will not be affected",
    ],
    correct_answer: "You may disrupt the flow of traffic",
    user_answer: "The traffic flow will flow freely",
    is_correct: false,
  },
  {
    question_number: 28,
    question:
      "You are driving on a highway and you just missed your exit. What is the safest action?",
    options: [
      "Switch on hazard lights and stop",
      "Stop, reverse and enter the slip road",
      "Move on and take the next exit",
    ],
    correct_answer: "Move on and take the next exit",
    user_answer: "Move on and take the next exit",
    is_correct: true,
  },
  {
    question_number: 29,
    question:
      "When dealing with pedestrians, it is important to remember that;",
    options: [
      "Pedestrians have the priority",
      "Pedestrians must know the traffic rules",
      "All pedestrians cross from the designated areas only",
    ],
    correct_answer: "Pedestrians have the priority",
    user_answer: "Pedestrians have the priority",
    is_correct: true,
  },
  {
    question_number: 30,
    question:
      "What can happen if another road user throws garbage or debris on the road way?",
    options: [
      "Other drivers will do the same",
      "A chain collision can happen",
      "All vehicles will stop",
    ],
    correct_answer: "A chain collision can happen",
    user_answer: "Other drivers will do the same",
    is_correct: false,
  },
  {
    question_number: 31,
    question:
      "Staying in your lane is important. It is called lane discipline. Violation of Lane discipline in Dubai carries a fine of;",
    options: ["AED 1000.00", "AED 400.00", "AED 150.00"],
    correct_answer: "AED 400.00",
    user_answer: "AED 400.00",
    is_correct: true,
  },
  {
    question_number: 32,
    question:
      "If there is speed humps on the road, drivers should slow down and be alert because;",
    options: [
      "There is also a give way sign",
      "Pedestrians may use this point to cross",
      "Other vehicles may cross the road",
    ],
    correct_answer: "Pedestrians may use this point to cross",
    user_answer: "Pedestrians may use this point to cross",
    is_correct: true,
  },
  {
    question_number: 33,
    question:
      "Which feature of the road causes the drivers to feel strong vibration if they drive over them?",
    options: ["Lane markings", "Lanes support system", "Rumble strips"],
    correct_answer: "Rumble strips",
    user_answer: "Rumble strips",
    is_correct: true,
  },
  {
    question_number: 34,
    question:
      "This can act as warning for drivers who may be feeling tired or sleepy.",
    options: [
      "Coffee breaks after a long drive",
      "Vibrations when the vehicle drives over the rumble strips",
      "Warning road markings",
    ],
    correct_answer: "Vibrations when the vehicle drives over the rumble strips",
    user_answer: "Coffee breaks after a long drive",
    is_correct: false,
  },
  {
    question_number: 35,
    question:
      "If you are passing a truck on a highway, why should you hold your steering firmly?",
    options: [
      "The turbulence around the vehicle may cause vibration on the steering",
      "The truck may wobble",
      "The space around the truck is restricted",
    ],
    correct_answer:
      "The turbulence around the vehicle may cause vibration on the steering",
    user_answer:
      "The turbulence around the vehicle may cause vibration on the steering",
    is_correct: true,
  },
  {
    question_number: 36,
    question:
      "If you pass a heavy truck on its right side, there is possibility that;",
    options: [
      "The truck driver may not give way",
      "The truck driver may see you easily",
      "The truck driver may not see you",
    ],
    correct_answer: "The truck driver may not see you",
    user_answer: "The truck driver may see you easily",
    is_correct: false,
  },
  {
    question_number: 37,
    question:
      "When turning at a junction, what should you be careful of if there is an approaching tall vehicle?",
    options: [
      "There may be a larger truck following it",
      "A motorcycle may be following it which is difficult to see",
      "The tall vehicle is going left or straight",
    ],
    correct_answer:
      "A motorcycle may be following it which is difficult to see",
    user_answer: "A motorcycle may be following it which is difficult to see",
    is_correct: true,
  },
  {
    question_number: 38,
    question:
      "If you are already inside the roundabout, how should you deal with an emergency vehicle?",
    options: [
      "Moving to the left or right without crossing the red signal.",
      "Stop then exit the roundabout and move to the right lane",
      "Keep moving, exit the roundabout and move to the right lane",
    ],
    correct_answer:
      "Keep moving, exit the roundabout and move to the right lane",
    user_answer: "Stop then exit the roundabout and move to the right lane",
    is_correct: false,
  },
  {
    question_number: 39,
    question:
      "There is warning of sand dunes ahead. What could be a potential problem?",
    options: [
      "Tires need to be deflated",
      "Tire grip on the road may be affected",
      "There may be visibility problem",
    ],
    correct_answer: "Tire grip on the road may be affected",
    user_answer: "Tire grip on the road may be affected",
    is_correct: true,
  },
  {
    question_number: 40,
    question:
      "Tram movement have priority over other road users in the Tram right of Way, except:",
    options: [
      "Speeding cars",
      "Pedestrians",
      "Army vehicles when moving in convoy.",
    ],
    correct_answer: "Army vehicles when moving in convoy.",
    user_answer: "Army vehicles when moving in convoy.",
    is_correct: true,
  },
  {
    question_number: 41,
    question:
      "Every time you push down on the brake pedal, your brake lights light up to;",
    options: [
      "show other drivers you intend to change direction",
      "warn other drivers you are slowing down or stopping",
      "warn other drivers that you are accelerating",
    ],
    correct_answer: "warn other drivers you are slowing down or stopping",
    user_answer: "warn other drivers you are slowing down or stopping",
    is_correct: true,
  },
  {
    question_number: 42,
    question:
      "Whats wrong with staying inside a vehicle that has broken down on the road?",
    options: [
      "This may cause more traffic jam",
      "Calling for help may be difficult",
      "Other drivers may not see and hit the broken down vehicle",
    ],
    correct_answer: "Other drivers may not see and hit the broken down vehicle",
    user_answer: "Other drivers may not see and hit the broken down vehicle",
    is_correct: true,
  },
  {
    question_number: 43,
    question:
      "You are travelling on freeway and you want to exit, what should you be doing to stay safe?",
    options: [
      "slow down and change lanes",
      "check your mirrors and confirm safety",
      "check your speed",
    ],
    correct_answer: "check your mirrors and confirm safety",
    user_answer: "check your mirrors and confirm safety",
    is_correct: true,
  },
  {
    question_number: 44,
    question:
      "In this scenario, you need to give way to vehicles coming from the right. You are not allowed to;",
    options: [
      "make a right turn here",
      "make a left turn",
      "stop before the stop line",
    ],
    correct_answer: "make a right turn here",
    user_answer: "make a left turn",
    is_correct: false,
  },
  {
    question_number: 45,
    question:
      "Using the Dubai Police App, you may have access to this service;",
    options: ["Pay visa fees", "Pay traffic fines", "Pay medical services"],
    correct_answer: "Pay traffic fines",
    user_answer: "Pay traffic fines",
    is_correct: true,
  },
  {
    question_number: 46,
    question: "Which these vehicles are permitted to turn right?",
    options: ["vehicle A and B only", "vehicle A only", "vehicle C only"],
    correct_answer: "vehicle A and B only",
    user_answer: "vehicle A and B only",
    is_correct: true,
  },
  {
    question_number: 47,
    question:
      "You are in a crash. The police are not in attendance. Someone is injured. What should you do?",
    options: [
      "make sure the injured person is alright then drive on",
      "report the crash to the nearest police station",
      "only report the crash to the nearest police station if property has also been damaged",
    ],
    correct_answer: "report the crash to the nearest police station",
    user_answer: "report the crash to the nearest police station",
    is_correct: true,
  },
  {
    question_number: 48,
    question:
      "You are driving car A. What does this diagram say about following distance?",
    options: [
      "in good driving conditions there should be about a one second gap between you and the car in front",
      "in good driving conditions there should be at least a two second gap between you and the car in front",
      "there is no parking allowed",
    ],
    correct_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    user_answer:
      "in good driving conditions there should be at least a two second gap between you and the car in front",
    is_correct: true,
  },
  {
    question_number: 49,
    question: "Which of the following is more important?",
    options: [
      "Looking ahead for hazards",
      "Controlling your vehicle in a skid",
      "Keeping your vehicle clean and tidy",
    ],
    correct_answer: "Looking ahead for hazards",
    user_answer: "Looking ahead for hazards",
    is_correct: true,
  },
  {
    question_number: 50,
    question: "Driving conditions on a road will be",
    options: [
      "worse in dry weather.",
      "worse in wet weather.",
      "the same in dry or wet weather.",
    ],
    correct_answer: "worse in wet weather.",
    user_answer: "worse in wet weather.",
    is_correct: true,
  },
];

export default data;
