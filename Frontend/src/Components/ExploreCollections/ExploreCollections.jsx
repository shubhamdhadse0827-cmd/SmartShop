import React from 'react';
import "./ExploreCollections.css";

const ExploreCollections = () => {

const exploreData = [
  {
    title: "Trending",
    items: [
      { img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&h=600&fit=crop&auto=format&q=80"},
    ]
  },
  {
    title: "Style",
    items: [
      { img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1520975922284-9e0c3f8e5c6d?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1495121605193-b116b5b09a0b?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=600&fit=crop&auto=format&q=80"},
    ]
  },
  {
    title: "Deals",
    items: [
      { img: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1593032465171-8c2f0b4c1e1c?w=500&h=600&fit=crop&auto=format&q=80"},
    ]
  },
  {
    title: "Occasion",
    items: [
      { img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&h=600&fit=crop&auto=format&q=80"},
      { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=600&fit=crop&auto=format&q=80"},
    ]
  }
];

return (
  <div className="explore-page">
    {exploreData.map((section, index) => (
      <div key={index} className="explore-section">
        <h2>{section.title}</h2>

        <div className="explore-grid">
          {section.items.map((item, i) => (
            <div className="explore-card" key={i}>
              <img src={item.img} alt="collection" />
            </div>
          ))}
        </div>

      </div>
    ))}
  </div>
);
}

export default ExploreCollections;