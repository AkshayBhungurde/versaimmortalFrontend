// import React, { useEffect } from "react";
// import "./About.css";
// export default function About() {
//   // SEO Setup using native React
//   useEffect(() => {
//     document.title = "About Us | VersaImmortal Pvt. Ltd.";
//     const metaDesc = document.createElement("meta");
//     metaDesc.name = "description";
//     metaDesc.content =
//       "Learn more about VersaImmortal Pvt. Ltd., a leading IT company in Pune offering web development, app development, software solutions, SaaS, and digital marketing services.";
//     document.head.appendChild(metaDesc);

//     return () => {
//       document.head.removeChild(metaDesc);
//     };
//   }, []);

//   return (
//     <div className="about-page">
//       {/* Hero Section */}
//       <section className="about-hero">
//         <div className="container">
//           <h1>About VersaImmortal Pvt. Ltd.</h1>
//           <p>
//             We are a leading IT company based in Pune, delivering modern web,
//             mobile, software, SaaS, and digital marketing solutions that help
//             businesses grow.
//           </p>
//         </div>
//       </section>

//       {/* Mission & Vision */}
//       <section className="about-mission">
//         <div className="container">
//           <div className="mission-grid">
//             <div className="mission-card">
//               <h2>Our Mission</h2>
//               <p>
//                 To deliver innovative, scalable, and high-quality digital
//                 solutions that drive business success.
//               </p>
//             </div>
//             <div className="mission-card">
//               <h2>Our Vision</h2>
//               <p>
//                 To become the most trusted IT partner for businesses worldwide
//                 by embracing technology and innovation.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section
//       <section className="about-team">
//         <div className="container">
//           <h2>Meet Our Team</h2>
//           <p>Our team of experts is passionate about technology and innovation.</p>
//           <div className="team-grid">
//             <TeamMember name="John Doe" role="CEO" />
//             <TeamMember name="Jane Smith" role="CTO" />
//             <TeamMember name="Michael Lee" role="Lead Developer" />
//             <TeamMember name="Sara Khan" role="Digital Marketing Head" />
//           </div>
//         </div>
//       </section> */}

//       {/* CTA Section */}
//       <section className="about-cta">
//         <div className="container">
//           <h2>Want to work with us?</h2>
//           <p>Contact us today and let's build amazing digital solutions together.</p>
//           <button>Contact Us</button>
//         </div>
//       </section>
//     </div>
//   );
// }

// // Team Member Card Component
// // function TeamMember({ name, role }) {
// //   return (
// //     <div className="team-member">
// //       <div className="team-photo">
// //         {/* Placeholder for photo */}
// //         <img
// //           src={`https://via.placeholder.com/150?text=${name.split(" ")[0]}`}
// //           alt={name}
// //         />
// //       </div>
// //       <h3>{name}</h3>
// //       <p>{role}</p>
// //     </div>
// //   );
// // }





import React, { useEffect } from "react";
import "./About.css";

export default function About() {
  // SEO Setup using native React
  useEffect(() => {
    document.title = "About Us | VersaImmortal Pvt. Ltd.";
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Learn more about VersaImmortal Pvt. Ltd., a leading IT company in Pune offering web development, app development, software solutions, SaaS, and digital marketing services.";
    document.head.appendChild(metaDesc);

    return () => {
      document.head.removeChild(metaDesc);
    };
  }, []);

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About VersaImmortal Pvt. Ltd.</h1>
          <p>
            We are a leading IT company based in Pune, delivering modern web,
            mobile, software, SaaS, and digital marketing solutions that help
            businesses grow.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <h2>Our Mission</h2>
              <p>
                To deliver innovative, scalable, and high-quality digital
                solutions that drive business success.
              </p>
            </div>
            <div className="mission-card">
              <h2>Our Vision</h2>
              <p>
                To become the most trusted IT partner for businesses worldwide
                by embracing technology and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Want to work with us?</h2>
          <p>Contact us today and let's build amazing digital solutions together.</p>
          <button>Contact Us</button>
        </div>
      </section>
    </div>
  );
}