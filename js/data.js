/* Vee Skincare N’ Spa — single source of truth for business info and services.
   Transcribed directly from Vee's own price-list cards (Sept 2026). Category
   grouping follows the price-list headers exactly. A few items carry no
   fixed price on the price list itself ("Price based on consultation") —
   those show "Price on consultation" in the UI instead of a number.
   A handful of names had obvious typos on the printed cards (e.g. "Messter"
   → "Masseter", "Eye bad" → "Eye Bag"); those are corrected here. One line —
   "Yam Leg/Calves Reduction" — is kept exactly as printed since the intended
   wording is unclear; please confirm with Vee and edit below if needed. */
window.VEE = (function () {
  var CATEGORIES = [
    { id: 'facials-skin', label: 'Facials & Skin Care', photo: 'facial2' },
    { id: 'waxing', label: 'Waxing', photo: 'massage2' },
    { id: 'laser-hair-removal', label: 'Laser Hair Removal', photo: 'skin' },
    { id: 'laser-body', label: 'Laser Body Treatments', photo: 'skin' },
    { id: 'prp-bio-filler', label: 'PRP & Bio Filler', photo: 'aesthetics' },
    { id: 'body-sculpting', label: 'Body Sculpting & Fat Reduction', photo: 'body' },
    { id: 'botox-fillers-threads', label: 'Botox, Fillers & Threads', photo: 'aesthetics' },
    { id: 'glp-1', label: 'GLP-1 Injection', photo: 'aesthetics' },
    { id: 'mesotherapy', label: 'Mesotherapy', photo: 'aesthetics' },
    { id: 'consultation', label: 'Consultation-Based', photo: 'skin' },
    { id: 'spa-other', label: 'Spa & Wellness', photo: 'spa' }
  ];
  var n = 0;
  var s = function (name, category, price, opts) {
    n++;
    var o = opts || {};
    return { id: 'svc-' + n, name: name, category: category, price: price || null, unit: o.unit || '', featured: !!o.featured };
  };
  var SERVICES = [
    // Facials & Skin Care
    s('Basic Facials', 'facials-skin', 30000, { featured: true }),
    s('Carbon Facials', 'facials-skin', 40000, { featured: true }),
    s('Glow Facials', 'facials-skin', 40000, { featured: true }),
    s('Acne Scars Treatment', 'facials-skin', 40000),
    s('Sunburn Facials', 'facials-skin', 40000),
    s('Korean / BB Glow Facials', 'facials-skin', 40000),
    s('Vampire Facials', 'facials-skin', 50000),
    s('Mesotherapy Facials', 'facials-skin', 60000),
    s('Vajicial', 'facials-skin', 12000),
    s('Butticial', 'facials-skin', 10000),
    // Waxing
    s('Leg Waxing', 'waxing', 20000),
    s('Brazilian Waxing', 'waxing', 15000),
    s('Chin Waxing', 'waxing', 10000),
    s('Underarm Waxing', 'waxing', 12000),
    s('Hand Waxing', 'waxing', 20000),
    s('Chest Waxing', 'waxing', 10000),
    // Laser Hair Removal
    s('Chin Hair Removal', 'laser-hair-removal', 20000),
    s('Underarm Hair Removal', 'laser-hair-removal', 20000),
    s('Brazilian Hair Removal', 'laser-hair-removal', 25000),
    s('Leg Hair Removal', 'laser-hair-removal', 60000),
    s('Hand Hair Removal', 'laser-hair-removal', 60000),
    s('Chest Hair Removal', 'laser-hair-removal', 40000),
    s('Dark Spot / Scar Laser Treatment', 'laser-hair-removal', null),
    // Laser Body Treatments
    s('Underarm Brightening', 'laser-body', 30000),
    s('Knuckle Treatment', 'laser-body', 30000),
    s('Butt Hyperpigmentation Treatment', 'laser-body', 40000),
    s('Inner Thigh Treatment', 'laser-body', 40000),
    s('Dark Lip Treatment', 'laser-body', 20000),
    // PRP & Bio Filler
    s('Butt Enlargement (PRP Bio Filler)', 'prp-bio-filler', 200000, { featured: true }),
    s('Breast Enlargement (PRP Bio Filler)', 'prp-bio-filler', 200000),
    s('Hips Enlargement (PRP Bio Filler)', 'prp-bio-filler', 200000),
    s('Smile Line (PRP Bio Filler)', 'prp-bio-filler', 150000),
    s('Under Eye (PRP Bio Filler)', 'prp-bio-filler', 150000),
    s('Butt Enlargement (PRP)', 'prp-bio-filler', 50000),
    s('Breast Enlargement (PRP)', 'prp-bio-filler', 50000),
    s('Hip Enlargement (PRP)', 'prp-bio-filler', 50000),
    s('Smile / Fine Line (PRP)', 'prp-bio-filler', 50000),
    s('Under Eye / Saggy Eye (PRP)', 'prp-bio-filler', 50000),
    s('O-Shot', 'prp-bio-filler', 60000),
    s('Hair Growth (PRP)', 'prp-bio-filler', 70000),
    s('Stretch Mark Treatment (PRP & Micro Needling)', 'prp-bio-filler', 50000, { unit: 'per body part' }),
    // Body Sculpting & Fat Reduction
    s('Bum Enlargement (Vacuum Therapy)', 'body-sculpting', 20000, { featured: true }),
    s('Hip / Hip Dip Enlargement (Vacuum Therapy)', 'body-sculpting', 20000),
    s('Breast Enlargement / Firming (Vacuum Therapy)', 'body-sculpting', 20000),
    s('Tummy Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000),
    s('Side Folds Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000),
    s('Laps / Cellulite Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000),
    s('Fatty Leg Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000),
    s('Arm Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000),
    s('Chin & Jaw Reduction (Cavitation / Laser Lipolysis)', 'body-sculpting', 40000),
    s('Tummy Reduction (Fat Dissolving Injection)', 'body-sculpting', 140000),
    s('Side Folds Reduction (Fat Dissolving Injection)', 'body-sculpting', 140000),
    s('Laps / Cellulite Reduction (Fat Dissolving Injection)', 'body-sculpting', 140000),
    s('Arm Reduction (Fat Dissolving Injection)', 'body-sculpting', 140000),
    s('Face Reduction (Fat Dissolving Injection)', 'body-sculpting', 70000),
    s('HI-FU Vagina Tightening', 'body-sculpting', 40000),
    // Botox, Fillers & Threads
    s('Yam Leg / Calves Reduction (Botox)', 'botox-fillers-threads', 160000),
    s('Forehead Wrinkles Treatment (Botox)', 'botox-fillers-threads', 200000, { featured: true }),
    s('Shoulder Slimming (Botox)', 'botox-fillers-threads', 200000),
    s('Sweaty Armpit Reduction (Botox)', 'botox-fillers-threads', 200000),
    s('Masseter Botox', 'botox-fillers-threads', 200000),
    s('Smile Line Filler', 'botox-fillers-threads', 280000, { unit: '2ml' }),
    s('Lip Filler', 'botox-fillers-threads', 140000, { unit: '2ml' }),
    s('Cheek Filler', 'botox-fillers-threads', 280000, { unit: '2ml' }),
    s('Under Eye Filler', 'botox-fillers-threads', 280000, { unit: '2ml' }),
    s('Chin Filler', 'botox-fillers-threads', 280000, { unit: '2ml' }),
    s('Jawline Filler', 'botox-fillers-threads', 280000, { unit: '2ml' }),
    s('Hand Rejuvenation Filler', 'botox-fillers-threads', 280000, { unit: '2ml' }),
    s('Body Filler — Breast, Butt or Hip', 'botox-fillers-threads', 350000, { unit: '100ml' }),
    s('Body Filler — Breast, Butt or Hip', 'botox-fillers-threads', 650000, { unit: '200ml' }),
    s('Full Face Lift (PDO Thread)', 'botox-fillers-threads', 400000),
    s('Nose Job (PDO Thread)', 'botox-fillers-threads', 200000),
    s('Smile Line (PDO Thread)', 'botox-fillers-threads', 200000),
    s('Double Chin (PDO Thread)', 'botox-fillers-threads', 350000),
    s('Eyebrow Lift (PDO Thread)', 'botox-fillers-threads', 200000),
    s('Neck Rejuvenation (PDO Thread)', 'botox-fillers-threads', 200000),
    s('Boobs Lift (PDO Thread)', 'botox-fillers-threads', 450000),
    s('Eye Bag Treatment (PDO Thread)', 'botox-fillers-threads', 200000),
    s('Skin Tightening (PDO Thread)', 'botox-fillers-threads', 450000),
    // GLP-1 Injection
    s('Retatrutide 10mg', 'glp-1', 270000, { featured: true }),
    s('Retatrutide 20mg', 'glp-1', 350000),
    s('Retatrutide 30mg', 'glp-1', 380000),
    s('Retatrutide 40mg', 'glp-1', 410000),
    s('Retatrutide 50mg', 'glp-1', 440000),
    s('Retatrutide 60mg', 'glp-1', 470000),
    s('Tirzepatide 5mg', 'glp-1', 220000),
    s('Tirzepatide 10mg', 'glp-1', 250000),
    s('Tirzepatide 20mg', 'glp-1', 290000),
    s('Tirzepatide 30mg', 'glp-1', 310000),
    s('Tirzepatide 40mg', 'glp-1', 330000),
    s('Tirzepatide 50mg', 'glp-1', 350000),
    s('Tirzepatide 60mg', 'glp-1', 370000),
    // Mesotherapy
    s('Hair Growth Treatment (Mesotherapy)', 'mesotherapy', 150000),
    s('Sclerotherapy', 'mesotherapy', 150000, { unit: '1 vial' }),
    // Consultation-Based
    s('Genital Wart Removal', 'consultation', null),
    s('Skin Tag Removal', 'consultation', null),
    s('Tattoo Removal', 'consultation', null),
    // Spa & Wellness
    s('Body Polish', 'spa-other', 30000, { featured: true }),
    s('Teeth Whitening', 'spa-other', 30000, { featured: true }),
    s('Lip Blush', 'spa-other', 20000),
    s('Massage', 'spa-other', 30000, { featured: true }),
    s('Pedicure', 'spa-other', 10000),
    s('Manicure', 'spa-other', 3000),
    s('Hand Knuckles Wash', 'spa-other', 15000),
    s('Leg Knuckles Wash', 'spa-other', 15000),
    s('Foot Detox', 'spa-other', 10000),
    s('Under Arm Treatment', 'spa-other', 15000),
    s('Inner Thighs Treatment', 'spa-other', 15000),
    s('Vagina Steaming', 'spa-other', 10000),
    s('Vitamin B12 Shot', 'spa-other', 15000),
    s('Radiant Whitening IV Drip', 'spa-other', 55000, { featured: true }),
    s('Luminous Glow IV Drip', 'spa-other', 45000),
    s('Weight Loss IV Drip', 'spa-other', 60000)
  ];
  return {
    business: {
      name: 'Vee Skincare N’ Spa',
      whatsapp: '2349050388498',
      phone: '+2349042443714',
      email: 'veeskincareorganic@gmail.com'
    },
    categories: CATEGORIES,
    services: SERVICES
  };
})();
