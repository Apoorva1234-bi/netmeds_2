
import React, { useState, useEffect } from 'react';
// import './CategoriesPage.css';

const initialCategories = {
  A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], I: [], J: [], K: [], L: [], M: [],
  N: [], O: [], P: [], Q: [], R: [], S: [], T: [], U: [], V: [], W: [], X: [], Y: [], Z: [],
};

const AllMedicines = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [filteredCategories, setFilteredCategories] = useState(initialCategories);
  const [activeLetter, setActiveLetter] = useState('ALL');

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      const fetchedCategories = {
        A: ['ADHD (7)', 'Acne (359)', 'Alcohol Addiction (12)', 'Allergies (809)', 'Alzheimer (89)', 'Amoebiasis (11)', 'Anaemia (55)', 'Anaesthesia - Local (63)', 'Anaesthesia General (2)', 'Anal Fissure (3)', 'Angina (210)', 'Anti allergic (0)', 'Anti-Scar (2)', 'Antibiotic (4)', 'Anxiety (38)', 'Apnea (1)', 'Appetite (37)'],
        D: ['Diarrhoea (228)', 'Dietary Management (0)', 'Digestion (103)', 'Dry Eye (200)', 'Dry Skin (647)'],
        E: ['Ear Conditions (55)', 'Ectoparasiticide (0)', 'Electrolytes (0)', 'Epilepsy/Convulsion (806)', 'Eye Infections (352)', 'Eye conditions (210)'],
        F: ['Fever (259)', 'Fungal (1)', 'Fungal Infections (1192)'],
        I: ['Intermittent Claudication (23)', 'Iron Supplement/Anaemia (302)', 'Itching/Dry Skin (10)'],
        K: ['Kidney Disease/Stones (142)'],
        L: ['LYMPHOEDEMA (0)', 'Leprosy (3)', 'Liver Disease (65)', 'Liver Supplement (0)', 'Lubrication (0)'],
        M: ['Malarial (84)', 'Melasma (3)', 'Migraine (113)', 'Mucolytic Agent (2)', 'Multiple Sclerosis (7)'],
        R: ['Rabies (1)', 'Rheumatoid Arthritis (38)'],
        S: ['Sanitizer (0)', 'Scabies (66)', 'Scar (15)', 'Schizophrenia (418)', 'Skin Infections (803)', 'Sleep Disorder (Insomnia) (0)', 'Smoking cessation (12)', 'Stretch Marks (14)', 'Sun Protectors (13)', 'Sunscreen Preparations (104)', 'Supplements (3284)', 'Surgicals (18)', 'Syringe (0)'],
      };
      setCategories(fetchedCategories);
      setFilteredCategories(fetchedCategories);
    }, 2000); // Simulate a 2-second delay for fetching data
  }, []);

  const handleLetterClick = (letter) => {
    setActiveLetter(letter);
    if (letter === 'ALL') {
      setFilteredCategories(categories);
    } else {
      const filtered = { [letter]: categories[letter] || [] };
      setFilteredCategories(filtered);
    }
  };

  return (
    <div>
      <h1 style={{color:'#24aeb1'}}>Find Your Prescription Medicines</h1>
      <h6 style={{fontSize:'1rem',color:'#24aeb1'}}> <i>Shop by Drug Category</i></h6>
      <div className="alphabet-container">
        {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'ALL'].map((letter) => (
          <div
            key={letter}
            className={`alphabet ${activeLetter === letter ? 'active' : ''}`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Object.keys(filteredCategories).map((letter) => (
          <div key={letter} style={{ margin: '10px' }}>
            <h2>{letter}</h2>
            <ul>
              {filteredCategories[letter].length > 0 ? (
                filteredCategories[letter].map((item, index) => <li key={index}>{item}</li>)
              ) : (
                <li>No items</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMedicines;
