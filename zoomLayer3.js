//zoom events for layer navigation
window.addEventListener("wheel", (e) => {
    console.log("wheel");
    e.preventDefault();

    // Zooming out, leads to layer 2
    if (e.deltaX < 0 || e.deltaY < 0) {
        window.location.href = 'layer2.html';
    }
}, { passive: false });

/*HOVERING, displays text within the box
Define content for each box, CHANGE EXPLANATION TEXTS HERE*/
var boxContents = {
    selection: {
        title: "Selection",
        explanation: "Explanation for Selection."
    },
    loss_of_mission: {
        title: "Loss of Mission",
        explanation: "Explanation for Loss of Mission."
    },
    loss_of_crew_life: {
        title: "Loss of Crew Life",
        explanation: "Explanation for Loss of Crew Life."
    },
    quality_of_life: {
        title: "Quality of Life",
        explanation: "Explanation for Quality of Life."
    },
    distance_from_earth:{
        title: "Distance From Earth",
        explanation: "Explanation for Distance from Earth."
    },
    mission_duration:{
        title: "Mission Duration",
        explanation: "Explanations."
    },
    communication_delay:{
        title: "Communication Delay",
        explanation: "Explanations."
    },
    isolated:{
        title: "Isolated",
        explanation: "Explanations."
    },
    confined:{
        title: "Confined",
        explanation: "Explanations."
    },
    extreme:{
        title: "Extreme",
        explanation: "Explanations."
    },
    resource_constrained:{
        title: "Resource Constrained",
        explanation: "Explanations."
    },
    mission_demands:{
        title: "Mission Demands",
        explanation: "Explanations."
    },
    mission_events:{
        title: "Mission Events",
        explanation: "Explanations."
    },
    crew_size:{
        title: "Crew Size",
        explanation: "Explanations."
    },
    social_support:{
        title: "Social Support",
        explanation: "Explanations."
    },
    social_density:{
        title: "Social Density",
        explanation: "Explanations."
    },
    monotony:{
        title: "Monotony",
        explanation: "Explanations."
    },
    group_living:{
        title: "Group living",
        explanation: "Explanations."
    },
    extraversion:{
        title: "Extraversion",
        explanation: "Explanations."
    },
    agreeableness:{
        title: "Agreeableness",
        explanation: "Explanations."
    },
    neuroticism:{
        title: "Neuroticism",
        explanation: "Explanations."
    },
    resilience:{
        title: "Resilience",
        explanation: "Explanations."
    },
    openness:{
        title: "Openness",
        explanation: "Explanations."
    },
    conscientiousness:{
        title: "Conscientiousness",
        explanation: "Explanations."
    },
    emotional_bandwidth:{
        title: "Emotional Bandwidth",
        explanation: "Explanations."
    },
    genetics:{
        title: "Genetics",
        explanation: "Explanations."
    },
    psychotherapy:{
        title: "Psychotherapy",
        explanation: "Explanations."
    },
    training_and_preperation:{
        title: "Training and Preperation",
        explanation: "Explanations."
    },
    ground_support:{
        title: "Ground Support",
        explanation: "Explanations."
    },
    medical_capabilities:{
        title: "Medical Capabilites",
        explanation: "Explanations."
    },
    clothing:{
        title: "Clothing",
        explanation: "Explanations."
    },
    family_and_friends:{
        title: "Family and Friends",
        explanation: "Explanations."
    },
    supplies:{
        title: "Supplies",
        explanation: "Explanations."
    },
    food:{
        title: "Food",
        explanation: "Explanations."
    },
    exercise_equipment:{
        title: "Exercise Equipment",
        explanation: "Explanations."
    },
    physical_ergonomics:{
        title: "Physical Ergonomics",
        explanation: "Explanations."
    },
    circulation_paths:{
        title: "Circulation Paths",
        explanation: "Explanations."
    },
    privacy:{
        title: "Privacy",
        explanation: "Explanations."
    },
    habitat:{
        title: "Habitat",
        explanation: "Explanations."
    },
    material_monotony:{
        title: "Material Monotony",
        explanation: "Explanations."
    },
    layout:{
        title: "Layout",
        explanation: "Explanations."
    },
    reprogrammability:{
        title: "Reprogrammability",
        explanation: "Explanations."
    },
    fixtures:{
        title: "Fixtures",
        explanation: "Explanations."
    },
    light_dark_cycles:{
        title: "Light/Dark Cycles",
        explanation: "Explanations."
    },
    altered_gravity:{
        title: "Altered Gravity",
        explanation: "Explanations."
    },
    lighting:{
        title: "Lighting",
        explanation: "Explanations."
    },
    radiation:{
        title: "Radiation",
        explanation: "Explanations."
    },
    contaminants:{
        title: "Contaminants",
        explanation: "Explanations."
    },
    volume:{
        title: "Volume",
        explanation: "Explanations."
    },
    temperature_and_humidity:{
        title: "Temperature/Humidity",
        explanation: "Explanations."
    },
    nutrition:{
        title: "Nutrition",
        explanation: "Explanations."
    },
    physical_workload:{
        title: "Physical Workload",
        explanation: "Explanations."
    },
    cognitive_workload:{
        title: "Cognitive Workload",
        explanation: "Explanations."
    },
    media_attention:{
        title: "Media Attention",
        explanation: "Explanations."
    },
    conflicts:{
        title: "Conflicts",
        explanation: "Explanations."
    },
    injuries:{
        title: "Injuries",
        explanation: "Explanations."
    },
    transition_processes:{
        title: "Transition Processes",
        explanation: "Explanations."
    },
    action_processes:{
        title: "Action Processes",
        explanation: "Explanations."
    },
    cohesion_processes:{
        title: "Cohesion Processes",
        explanation: "Explanations."
    },
    stress_regulation:{
        title: "Stress Regulation",
        explanation: "Explanations."
    },
    placemaking:{
        title: "Placemaking",
        explanation: "Explanations."
    },
    sleep:{
        title: "Sleep",
        explanation: "Explanations."
    },
    physical_health:{
        title: "Physical Health",
        explanation: "Explanations."
    },
    sleep_quality:{
        title: "Sleep Quality",
        explanation: "Explanations."
    },
    anxiety:{
        title: "Anxiety",
        explanation: "Explanations."
    },
    agency:{
        title: "Agency",
        explanation: "Explanations."
    },
    stress:{
        title: "Stress",
        explanation: "Explanations."
    },
    crew_performance:{
        title: "Crew Performance",
        explanation: "Explanations."
    },
    attachment:{
        title: "Attachment",
        explanation: "Explanations."
    },
    trust:{
        title: "Trust",
        explanation: "Explanations."
    },
    curiosity:{
        title: "Curiosity",
        explanation: "Explanations."
    },
    kinship:{
        title: "Kinship",
        explanation: "Explanations."
    },
    boredom:{
        title: "Boredom",
        explanation: "Explanations."
    },
    tranquility:{
        title: "Tranquility",
        explanation: "Explanations."
    },
    discontentment:{
        title: "Discontentment",
        explanation: "Explanations."
    },
    nostalgia_homesickness:{
        title: "Nostalgia Homesickness",
        explanation: "Explanations."
    },
    fear:{
        title: "Fear",
        explanation: "Explanations."
    },
    awe:{
        title: "Awe",
        explanation: "Explanations."
    },
    depression:{
        title: "Depression",
        explanation: "Explanations."
    },
};


document.addEventListener('DOMContentLoaded', function () {
    //Get all inner box elements
    var innerBoxes = document.querySelectorAll('.box div');

    //Format text to the desired format
    function formatToSmallBoxName(text) {
        return text.trim().toLowerCase().replace(/\s+/g, '_');
    }

    function getRightBoxes(smallBoxName){
        switch(smallBoxName){
            case "selection":
                return ['selection', 'crew_size', 'monotony', 'social_density', 'social_support', 'group_living', 'cohesion_processes', 'privacy', 'kinship', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "communication_delay":
                return ['communication_delay', 'ground_support', 'family_and_friends', 'psychotherapy', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "distance_from_earth":
                return ['distance_from_earth', 'communication_delay', 'resource_constrained', 'ground_support', 'supplies', 'training_and_preperation', 'family_and_friends', 'psychotherapy', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'physical_health', 'stress_regulation', 'material_monotony', 'physical_workload', 'monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'discontentment', 'boredom', 'cohesion_processes', 'kinship']
            case "mission_duration":
                return ['mission_duration', 'isolated', 'monotony', 'crew_size', 'ground_support', 'cohesion_processes', 'social_density', 'family_and_friends', 'psychotherapy', 'kinship', 'privacy', 'stress_regulation', 'placemaking', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'trust', 'agency', 'nostalgia_homesickness', 'attachment', 'sleep_quality']
            case "isolated":
                return ['isolated', 'monotony', 'crew_size', 'ground_support', 'cohesion_processes', 'social_density', 'family_and_friends', 'psychotherapy', 'kinship', 'privacy', 'stress_regulation', 'placemaking', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'trust', 'agency', 'nostalgia_homesickness', 'attachment', 'sleep_quality']
            case "confined":
                return ['confined', 'crew_size', 'monotony', 'social_density', 'social_support', 'group_living', 'habitat', 'cohesion_processes', 'privacy', 'volume', 'physical_ergonomics', 'layout', 'kinship', 'placemaking', 'sleep', 'stress_regulation', 'physical_health', 'temperature_and_humidity', 'reprogrammability', 'circulation_paths', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'tranquility', 'material_monotony', 'boredom']
            case "extreme":
                return ['extreme', 'media_attention', 'altered_gravity', 'light_dark_cycles', 'radiation', 'privacy', 'cognitive_workload', 'physical_health', 'physical_ergonomics', 'sleep', 'placemaking', 'stress_regulation', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'temperature_and_humidity', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'material_monotony', 'boredom']
            case "resource_constrained":
                return ['resource_constrained', 'supplies', 'training_and_preperation', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'physical_health', 'material_monotony', 'physical_workload', 'monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'boredom', 'stress_regulation', 'cohesion_processes', 'discontentment', 'kinship']
            case "mission_demands":
                return ['mission_demands', 'mission_events', 'cognitive_workload', 'physical_workload', 'conflicts', 'injuries', 'stress_regulation', 'sleep', 'physical_health', 'cohesion_processes', 'action_processes', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep_quality', 'tranquility', 'kinship', 'crew_performance']
            case "mission_events":
                return ['mission_events', 'conflicts', 'injuries', 'cohesion_processes', 'action_processes', 'physical_health', 'kinship', 'crew_performance', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "extraversion":
                return ['extraversion', 'cohesion_processes', 'social_support', 'kinship']
            case "openness":
                return ['openness', 'action_processes', 'transition_processes', 'cohesion_processes', 'monotony', 'crew_performance', 'kinship']
            case "agreeableness":
                return ['agreeableness', 'cohesion_processes', 'action_processes', 'group_living', 'kinship', 'crew_performance']
            case "genetics":
                return ['genetics', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "conscientiousness":
                return ['conscientiousness', 'cohesion_processes', 'group_living', 'kinship']
            case "neuroticism":
                return ['neuroticism', 'sleep', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'depression', 'anxiety', 'sleep_quality', 'kinship', 'crew_performance', 'discontentment', 'stress']
            case "resilience":
                return ['resilience', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "emotional_bandwidth":
                return ['emotional_bandwidth', 'stress_regulation', 'social_support', 'depression', 'anxiety', 'discontentment', 'stress', 'cohesion_processes', 'kinship']
            case "circulation_paths":
                return ['circulation_paths', 'reprogrammability', 'group_living', 'placemaking', 'cohesion_processes', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'kinship']
            case "material_monotony":
                return ['material_monotony', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "fixtures":
                return ['fixtures', 'monotony', 'cohesion_processes', 'kinship']
            case "habitat":
                return ['habitat', 'privacy', 'volume', 'physical_ergonomics', 'layout', 'placemaking', 'sleep', 'stress_regulation', 'physical_health', 'temperature_and_humidity', 'reprogrammability', 'circulation_paths', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'tranquility', 'material_monotony', 'group_living', 'boredom', 'cohesion_processes', 'kinship']
            case "layout":
                return ['layout', 'reprogrammability', 'circulation_paths', 'placemaking', 'group_living', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'cohesion_processes', 'kinship']
            case "reprogrammability":
                return ['reprogrammability', 'placemaking', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment']
            case "physical_ergonomics":
                return ['physical_ergonomics', 'physical_health', 'temperature_and_humidity', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'material_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "privacy":
                return ['privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "light_dark_cycles":
                return ['light_dark_cycles', 'sleep', 'physical_health', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress']
            case "volume":
                return ['volume', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "lighting":
                return ['lighting', 'material_monotony', 'physical_health', 'sleep', 'physical_ergonomics', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'temperature_and_humidity', 'discontentment']
            case "radiation":
                return ['radiation', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "althered_gravity":
                return ['altered_gravity', 'physical_health', 'physical_ergonomics', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'temperature_and_humidity', 'material_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "nutrition":
                return ['nutrition', 'sleep', 'physical_health', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress']
            case "contaminants":
                return ['contaminants', 'physical_ergonomics', 'sleep', 'physical_health', 'temperature_and_humidity', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'material_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "temperature_and_humidity":
                return ['temperature_and_humidity', 'sleep', 'material_monotony', 'depression', 'anxiety', 'sleep_quality', 'boredom', 'stress_regulation', 'discontentment', 'stress']
            case "crew_size":
                return ['crew_size', 'social_density', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "monotony":
                return ['monotony', 'cohesion_processes', 'kinship']
            case "social_density":
                return ['social_density', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "social_support":
                return ['social_support', 'cohesion_processes', 'kinship']
            case "group_living":
                return ['group_living', 'cohesion_processes', 'kinship']
            case "psychotherapy":
                return ['psychotherapy', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "family_and_friends":
                return ['family_and_friends', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "clothing": 
                return ['clothing', 'material_monotony', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "training_and_preperation":
                return ['training_and_preperation', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "ground_support":
                return ['ground_support', 'family_and_friends', 'psychotherapy', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "supplies":
                return ['supplies', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'physical_health', 'material_monotony', 'physical_workload', 'monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'boredom', 'stress_regulation', 'cohesion_processes', 'discontentment', 'kinship']
            case "medical_capabilities":
                return ['medical_capabilities', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "food":
                return ['food', 'nutrition', 'material_monotony', 'sleep', 'physical_health', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'discontentment']
            case "exercise_equipment":
                return ['exercise_equipment', 'physical_workload', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "media_attention":
                return ['media_attention', 'privacy', 'cognitive_workload', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "physical_workload":
                return ['physical_workload', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "conflicts":
                return ['conflicts', 'cohesion_processes', 'action_processes', 'kinship', 'crew_performance']
            case "injuries":
                return ['injuries', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "cognitive_workload":
                return ['cognitive_workload', 'stress_regulation', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep_quality']
            case "transition_processes":
                return ['transition_processes', 'crew_performance']
            case "action_processes":
                return ['action_processes', 'crew_performance']
            case "cohesion_processes":
                return ['cohesion_processes', 'kinship']
            case "stress_regulation":
                return ['stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "placemaking":
                return ['placemaking', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment']
            case "sleep":
                return ['sleep', 'depression', 'anxiety', 'sleep_quality']
            case "physical_health":
                return ['physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "sleep_quality":
                return ['sleep_quality']
            case "anxiety":
                return ['anxiety']
            case "agency":
                return ['agency']
            case "stress":
                return ['stress']
            case "crew_performance":
                return ['crew_performance']
            case "attachment":
                return ['attachment']
            case "trust":
                return ['trust']
            case "curiosity":
                return ['curiosity']
            case "kinship":
                return ['kinship']
            case "boredom":
                return ['boredom']
            case "tranquility":
                return ['tranquility']
            case "discontentment":
                return ['discontentment']
            case "nostalgia_homesickness":
                return ['nostalgia_homesickness']
            case "fear":
                return ['fear']
            case "awe":
                return ['awe']
            case "depression":
                return ['depression']
            default:
                return []
        }
    }

    //All boxes the current one is related to, left and right
    function getRelatedBoxes(smallBoxName) {
        switch (smallBoxName) {
            case 'selection':
                return ['selection', 'crew_size', 'monotony', 'social_density', 'social_support', 'group_living', 'cohesion_processes', 'privacy', 'kinship', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case 'distance_from_earth':
                return ['distance_from_earth', 'communication_delay', 'resource_constrained', 'ground_support', 'supplies', 'training_and_preperation', 'family_and_friends', 'psychotherapy', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'physical_health', 'stress_regulation', 'material_monotony', 'physical_workload', 'monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'discontentment']
            case 'communication_delay':
                return ['communication_delay', 'ground_support', 'family_and_friends', 'psychotherapy', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress', 'distance_from_earth']
            case 'mission_duration':
                return ['mission_duration', 'isolated', 'monotony', 'crew_size', 'ground_support', 'cohesion_processes', 'social_density', 'family_and_friends', 'psychotherapy', 'kinship', 'privacy', 'stress_regulation', 'placemaking', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress']
            case 'isolated':
                return ['isolated', 'monotony', 'crew_size', 'ground_support', 'cohesion_processes', 'social_density', 'family_and_friends', 'psychotherapy', 'kinship', 'privacy', 'stress_regulation', 'placemaking', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'mission_duration']
            case 'confined':
                return ['confined', 'crew_size', 'monotony', 'social_density', 'social_support', 'group_living', 'habitat', 'cohesion_processes', 'privacy', 'volume', 'physical_ergonomics', 'layout', 'kinship', 'placemaking', 'sleep', 'stress_regulation', 'physical_health', 'temperature_and_humidity', 'reprogrammability', 'circulation_paths', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'tranquility', 'material_monotony', 'boredom']
            case 'extreme':
                return ['extreme', 'media_attention', 'altered_gravity', 'light_dark_cycles', 'radiation', 'privacy', 'cognitive_workload', 'physical_health', 'physical_ergonomics', 'sleep', 'placemaking', 'stress_regulation', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'temperature_and_humidity']
            case 'resource_constrained':
                return ['resource_constrained', 'supplies', 'training_and_preperation', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'physical_health', 'material_monotony', 'physical_workload', 'monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'boredom', 'stress_regulation', 'distance_from_earth']
            case 'mission_demands':
                return ['mission_demands', 'mission_events', 'cognitive_workload', 'physical_workload', 'conflicts', 'injuries', 'stress_regulation', 'sleep', 'physical_health', 'cohesion_processes', 'action_processes', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep_quality', 'tranquility']
            case 'mission_events':
                return ['mission_events', 'conflicts', 'injuries', 'cohesion_processes', 'action_processes', 'physical_health', 'kinship', 'crew_performance', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'mission_demands']
            case 'extraversion':
                return ['extraversion', 'cohesion_processes', 'social_support', 'kinship']
            case 'openness':
                return ['openness', 'action_processes', 'transition_processes', 'cohesion_processes', 'monotony', 'crew_performance', 'kinship']
            case 'agreeableness':
                return ['agreeableness', 'cohesion_processes', 'action_processes', 'group_living', 'kinship', 'crew_performance']
            case 'conscientiousness':
                return ['conscientiousness', 'cohesion_processes', 'group_living', 'kinship']
            case 'neuroticism':
                return ['neuroticism', 'sleep', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'depression', 'anxiety', 'sleep_quality', 'kinship', 'crew_performance', 'discontentment', 'stress']
            case 'emotional_bandwidth':
                return ['emotional_bandwidth', 'stress_regulation', 'social_support', 'depression', 'anxiety', 'discontentment', 'stress', 'cohesion_processes', 'kinship']
            case 'genetics':
                return ['genetics', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case 'resilience':
                return ['resilience', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case 'crew_size':
                return ['crew_size', 'social_density', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'isolated', 'crew_composition', 'mission_duration', 'selection', 'confined']
            case 'social_support':
                return ['social_support', 'cohesion_processes', 'kinship', 'crew_composition', 'extraversion', 'emotional_bandwidth', 'selection', 'confined']
            case 'social_density':
                return ['social_density', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'crew_composition', 'crew_size', 'selection', 'confined', 'isolated', 'mission_duration']
            case 'group_living':
                return ['group_living', 'cohesion_processes', 'kinship', 'crew_composition', 'agreeableness', 'neuroticism', 'conscientiousness', 'circulation_paths', 'selection', 'confined', 'layout', 'habitat']
            case 'monotony':
                return ['monotony', 'cohesion_processes', 'kinship', 'isolated', 'crew_composition', 'openness', 'fixtures', 'mission_duration', 'selection', 'confined', 'supplies', 'resource_constrained', 'distance_from_earth']
            case 'habitat':
                return ['habitat', 'privacy', 'volume', 'physical_ergonomics', 'layout', 'placemaking', 'sleep', 'stress_regulation', 'physical_health', 'temperature_and_humidity', 'reprogrammability', 'circulation_paths', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'tranquility', 'material_monotony', 'group_living', 'boredom', 'cohesion_processes', 'kinship', 'confined']
            case 'circulation_paths':
                return ['circulation_paths', 'reprogrammability', 'group_living', 'placemaking', 'cohesion_processes', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'kinship', 'layout', 'habitat', 'confined']
            case 'layout':
                return ['layout', 'reprogrammability', 'circulation_paths', 'placemaking', 'group_living', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'cohesion_processes', 'kinship', 'habitat', 'confined']
            case 'privacy':
                return ['privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'social_density', 'habitat', 'volume', 'media_attention', 'crew_composition', 'crew_size', 'confined', 'extreme', 'selection', 'isolated', 'mission_duration']
            case 'physical_ergonomics':
                return ['physical_ergonomics', 'physical_health', 'temperature_and_humidity', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'material_monotony', 'habitat', 'altered_gravity', 'contaminants', 'lighting', 'confined', 'extreme']
            case 'fixtures':
                return ['fixtures', 'monotony', 'cohesion_processes', 'kinship', 'supplies', 'resource_constrained', 'distance_from_earth']
            case 'reprogrammability':
                return ['reprogrammability', 'placemaking', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'circulation_paths', 'layout', 'habitat']
            case 'material_monotony':
                return ['material_monotony', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'supplies', 'physical_ergonomics', 'resource_constrained']
            case 'psychotherapy':
                return ['psychotherapy', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress', 'ground_support', 'communication_delay', 'isolated', 'distance_from_earth', 'mission_duration']
            case 'clothing':
                return ['clothing', 'material_monotony', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress', 'supplies', 'resource_constrained', 'distance_from_earth']
            case 'training_and_preperation':
                return ['training_and_preperation', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'resource_constrained', 'distance_from_earth']
            case 'family_and_friends':
                return ['family_and_friends', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress', 'ground_support', 'communication_delay', 'isolated', 'distance_from_earth', 'mission_duration']
            case 'ground_support':
                return ['ground_support', 'family_and_friends', 'psychotherapy', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress', 'communication_delay', 'isolated', 'distance_from_earth', 'mission_duration']
            case 'supplies':
                return ['supplies', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'material_monotony', 'physical_workload', 'physical_health', 'monotony', 'nutrition', 'boredom', 'stress_regulation', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'cohesion_processes', 'resource_constrained', 'distance_from_earth']
            case 'medical_capabilities':
                return ['medical_capabilities', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'supplies', 'resource_constrained', 'distance_from_earth']
            case 'food':
                return ['food', 'nutrition', 'material_monotony', 'sleep', 'physical_health', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'discontentment', 'supplies', 'resource_constrained', 'distance_from_earth']
            case 'exercise_equipment':
                return ['exercise_equipment', 'physical_workload', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'supplies', 'resource_constrained', 'distance_from_earth']
            case 'light_dark_cycles':
                return ['light_dark_cycles', 'sleep', 'physical_health', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'extreme']
            case 'altered_gravity':
                return ['altered_gravity', 'physical_health', 'physical_ergonomics', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'temperature_and_humidity', 'material_monotony', 'boredom', 'stress_regulation', 'discontentment', 'extreme']
            case 'lighting':
                return ['lighting', 'material_monotony', 'physical_health', 'sleep', 'physical_ergonomics', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'temperature_and_humidity', 'discontentment']
            case 'radiation':
                return ['radiation', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'extreme']
            case 'contaminants':
                return ['contaminants', 'physical_ergonomics', 'sleep', 'physical_health', 'temperature_and_humidity', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'material_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case 'volume':
                return ['volume', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'habitat', 'confined']
            case 'temperature_and_humidity':
                return ['temperature_and_humidity', 'sleep', 'material_monotony', 'depression', 'anxiety', 'sleep_quality', 'boredom', 'stress_regulation', 'discontentment', 'stress', 'physical_ergonomics', 'habitat', 'altered_gravity', 'contaminants', 'lighting', 'confined', 'extreme']
            case 'nutrition':
                return ['nutrition', 'sleep', 'physical_health', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'food', 'supplies', 'resource_constrained', 'distance_from_earth']
            case 'physical_workload':
                return ['physical_workload', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'mission_demands', 'exercise_equipment', 'supplies', 'resource_constrained', 'distance_from_earth']
            case 'media_attention':
                return ['media_attention', 'privacy', 'cognitive_workload', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'extreme']
            case 'conflicts':
                return ['conflicts', 'cohesion_processes', 'action_processes', 'kinship', 'crew_performance', 'mission_events', 'mission_demands']
            case 'injuries':
                return ['injuries', 'physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'mission_events', 'mission_demands']
            case 'cognitive_workload':
                return ['cognitive_workload', 'stress_regulation', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep_quality', 'mission_demands', 'media_attention', 'extreme']
            case 'transition_processes':
                return ['transition_processes', 'crew_performance', 'openness', 'neuroticism']
            case 'action_processes':
                return ['action_processes', 'crew_performance', 'openness', 'agreeableness', 'conflicts', 'mission_events', 'mission_demands']
            case 'cohesion_processes':
                return ['cohesion_processes', 'kinship', 'extraversion', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'crew_composition', 'emotional_bandwidth', 'isolated', 'fixtures', 'circulation_paths', 'mission_events', 'selection', 'confined', 'mission_duration']
            case 'stress_regulation':
                return ['stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'social_density', 'habitat', 'volume', 'media_attention', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'mission_demands', 'crew_composition', 'crew_size', 'confined', 'extreme', 'communication_delay', 'isolated']
            case 'placemaking':
                return ['placemaking', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'privacy', 'reprogrammability', 'social_density', 'habitat', 'volume', 'media_attention', 'circulation_paths', 'layout', 'crew_composition', 'crew_size', 'confined', 'extreme', 'selection', 'isolated', 'mission_duration']
            case 'sleep':
                return ['sleep', 'depression', 'anxiety', 'sleep_quality', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'physical_health', 'social_density', 'habitat', 'volume', 'media_attention', 'extreme', 'physical_ergonomics', 'food', 'mission_demands', 'exercise_equipment', 'genetics', 'training_and_preperation', 'medical_capabilites', 'altered_gravity', 'radiation', 'injuries', 'crew_composition', 'crew_size', 'confined', 'supplies']
            case 'physical_health':
                return ['physical_health', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'habitat', 'contaminants', 'resource_constrained', 'supplies', 'extreme', 'food', 'mission_demands', 'mission_events', 'confined']
            case 'sleep_quality':
                return ['sleep_quality', 'sleep', 'physical_health', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'social_density', 'habitat', 'volume', 'media_attention', 'extreme', 'physical_ergonomics', 'food', 'mission_demands', 'exercise_equipment', 'mission_demands', 'media_attention']
            case 'crew_performance':
                return ['crew_performance', 'transition_processes', 'action_processes', 'openness', 'neuroticism', 'openness', 'agreeableness', 'conflicts', 'mission_events', 'mission_demands']
            case 'anxiety':
                return ['anxiety', 'stress_regulation', 'sleep', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'social_density', 'habitat', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'mission_demands', 'media_attention']
            case 'attachment':
                return ['attachment', 'placemaking', 'privacy', 'reprogrammability', 'social_density', 'habitat', 'volume', 'media_attention', 'circulation_paths', 'layout', 'crew_composition', 'crew_size', 'confined', 'extreme', 'layout', 'selection', 'confined', 'isolated', 'mission_duration']
            case 'trust':
                return ['trust', 'placemaking', 'privacy', 'reprogrammability', 'social_density', 'habitat', 'volume', 'media_attention', 'circulation_paths', 'layout', 'crew_composition', 'crew_size', 'confined', 'extreme', 'layout', 'selection', 'confined', 'isolated', 'mission_duration']
            case 'agency':
                return ['agency', 'placemaking', 'privacy', 'reprogrammability', 'social_density', 'habitat', 'volume', 'media_attention', 'circulation_paths', 'layout', 'crew_composition', 'crew_size', 'confined', 'extreme', 'layout', 'selection', 'confined', 'isolated', 'mission_duration']
            case 'stress':
                return ['stress', 'stress_regulation', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'social_density', 'habitat', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'mission_demands', 'media_attention', 'habitat', 'altered_gravity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'extreme', 'extreme', 'extreme', 'food', 'mission_demands', 'mission_events', 'crew_composition', 'crew_size', 'confined', 'extreme', 'communication_delay', 'isolated']
            case 'discontentment':
                return ['discontentment', 'stress_regulation', 'placemaking', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'privacy', 'reprogrammability', 'social_density', 'habitat', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'mission_demands', 'media_attention']
            case 'kinship':
                return ['kinship', 'cohesion_processes', 'extraversion', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'crew_composition', 'extraversion', 'emotional_bandwidth', 'isolated', 'crew_composition', 'openness', 'fixtures', 'crew_composition', 'agreeableness', 'neuroticism', 'conscientiousness', 'circulation_paths', 'mission_events', 'selection', 'confined', 'mission_duration']
            case 'nostalgia_homesickness':
                return ['nostalgia_homesickness', 'placemaking', 'privacy', 'reprogrammability', 'social_density', 'habitat', 'volume', 'media_attention', 'circulation_paths', 'layout', 'crew_composition', 'crew_size', 'confined', 'extreme', 'layout', 'selection', 'confined', 'isolated', 'mission_duration']
            case 'boredom':
                return ['boredom', 'material_monotony', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'supplies', 'supplies', 'physical_ergonomics', 'resource_constrained']
            case 'tranquility':
                return ['tranquility', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'habitat', 'altered_gravity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'extreme', 'extreme', 'extreme', 'food', 'mission_demands', 'mission_events', 'confined']
            case 'depression':
                return ['depression', 'stress_regulation', 'sleep', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'social_density', 'habitat', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'mission_demands', 'media_attention']
            default:
                return [];
        }
    }
    
    var arrows = [];

    //Event listeners to each inner box
    innerBoxes.forEach(function (innerBox) {
        innerBox.addEventListener('mouseenter', function () {
            var explanationBox = document.querySelector('.explanation');
            
            //Store the original content
            if (!explanationBox.dataset.originalContent) {
                explanationBox.dataset.originalContent = explanationBox.innerHTML;
            }

            var boxElement = innerBox.closest('.box');

            if (boxElement) {
                //Use the text content of the hovered element as the identifier
                var smallBoxName = formatToSmallBoxName(innerBox.textContent);
                var content = boxContents[smallBoxName];
                explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
                
                var relatedBoxes = getRelatedBoxes(smallBoxName);                
                var rightBoxes = getRightBoxes(smallBoxName);

                innerBoxes.forEach(function (box) {
                        //check if the small box is in relatedBoxes
                        var relatedBox = formatToSmallBoxName(box.textContent)
                        var isRelated = relatedBoxes.includes(relatedBox);
                        if (!isRelated) { //if not in related, then we need to grey it out
                            box.classList.add('greyed-out');
                        }else{
                            //drawing arrows connecting components using the arrowLine function
                            //https://github.com/stanko-arbutina/arrow-line?tab=readme-ov-file
                            if (relatedBox != smallBoxName){
                                if (rightBoxes.includes(relatedBox)){
                                    const arrow = arrowLine('.' + smallBoxName, '.' + relatedBox, { color: 'white' });
                                    arrows.push(arrow)
                                }else{
                                    const arrow = arrowLine('.' + relatedBox, '.' + smallBoxName, { color: 'white' });
                                    arrows.push(arrow)
                                }  
                            }
                        }
                });

            }
        });

        innerBox.addEventListener('mouseleave', function () {
            //Restore the original content
            var explanationBox = document.querySelector('.explanation');
            explanationBox.innerHTML = explanationBox.dataset.originalContent;

            innerBoxes.forEach(function (box) {
                box.classList.remove('greyed-out');
            });

            // Remove existing arrows
            arrows.forEach(arrow => arrow.remove());
            arrows = [];

        });
    });
});
