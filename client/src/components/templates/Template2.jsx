import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/profileActions";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

const Template2 = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const error = useSelector((state) => state.profile.error);

  const componentRef2 = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef2.current,
    documentTitle: profile ? `resume_${profile.personalInfo.name}` : 'resume',
    pageStyle: "@page { size: A4; margin: 20mm; }",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      
    });
  };

  useEffect(() => {
    if (!profile) {
      dispatch(getProfile());
    }
  }, [dispatch, profile]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div ref={componentRef2} className="font-times-new-roman p-10 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
        <div className="text-center pb-4 mb-4">
          <h1 className="text-4xl font-bold ">{profile.personalInfo.name}</h1>
          <div className="flex justify-center space-x-4">
            <span className="flex items-center space-x-2">
              <MdEmail />
              <span>{profile.personalInfo.email}</span>
            </span>
            <span className="flex items-center space-x-2">
              <MdPhone />
              <span>{profile.personalInfo.phone}</span>
            </span>
            <span className="flex items-center space-x-2">
              <FaGlobe />
              <a href={profile.personalInfo.website} className="underline">{profile.personalInfo.website}</a>
            </span>
          </div>
          <div className="flex items-center justify-center mt-2">
            <MdLocationOn />
            <span className="ml-2">
              {profile.personalInfo.address}, {profile.personalInfo.city}, {profile.personalInfo.province}, {profile.personalInfo.postalCode}, {profile.personalInfo.country}
            </span>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold border-b-2 border-black pb-2 mb-2">Education</h2>
          {profile.education.map((edu) => (
            <div key={edu._id} className="mb-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold">{edu.institution}</h3>
                <p>{edu.institutionCity}, {edu.institutionProvince}</p>
                <p>{formatDate(edu.startDate)} - {formatDate(edu.endDate)}</p>
              </div>
              <p className="italic">{edu.degree}</p>
              <p>{edu.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold  border-b-2 border-black pb-2 mb-2">Skills</h2>
          <div className="grid grid-cols-3 gap-4">
            {profile.skills.map((skill) => (
              <p key={skill._id} className="italic"> {skill.name}</p>
            ))}
          </div>
        </div>

        <div className="mb-4">
        <h2 className="text-2xl font-bold  border-b-2 border-black pb-2 mb-2">
          Projects
        </h2>
        {profile.projects.map((project) => (
          <div key={project._id} className="mb-4">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p>{project.skillsUsed.join(", ")}</p>
            <p className="italic">{project.description}</p>
            {project.link && (
              <a href={project.link} className=" underline">
                {project.link}
              </a>
            )}
          </div>
        ))}
      </div>

        <div className="mb-4">
        <h2 className="text-2xl font-bold  border-b-2 border-black pb-2 mb-2">
          Experience
        </h2>
        {profile.experience.map((exp) => (
          <div key={exp._id} className="mb-4">
            <div className="flex justify-between">
             <span> <h3 className="text-lg font-bold">{exp.company}</h3>
              <p>
                {exp.city}, {exp.province}
              </p>
              </span>
              <p>
                {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
              </p>
            </div>
            <p className="italic">{exp.position}</p>
            <p>{exp.description}</p>
            <ul className="list-disc list-inside ml-4">
              {exp.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold  border-b-2 border-black pb-2 mb-2">Achievements</h2>
          {profile.achievements.map((ach) => (
            <div key={ach._id} className="mb-4">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold">{ach.title}</h3>
                <p>{formatDate(ach.date)}</p>
              </div>
              <p>{ach.description}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Download PDF
      </button>
    </div>
  );
});

Template2.displayName = "Template2";

export default Template2;
