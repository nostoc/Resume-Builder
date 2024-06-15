// src/components/templates/Template2.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/actions/profileActions";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Template2 = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  const error = useSelector((state) => state.profile.error);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
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
    <div className="font-serif p-10 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-center pb-4 mb-4">
        <h1 className="text-3xl font-bold text-purple-700">{profile.personalInfo.name}</h1>
        <p className="flex justify-center items-center space-x-4">
          <span className="flex items-center">
            <MdEmail className="mr-2" /> {profile.personalInfo.email}
          </span>
          <span className="flex items-center">
            <MdPhone className="mr-2" /> {profile.personalInfo.phone}
          </span>
          <span className="flex items-center">
            <FaGlobe className="mr-2" />
            <a href={profile.personalInfo.website} className="underline">{profile.personalInfo.website}</a>
          </span>
        </p>
        <p className="flex items-center justify-center">
          <MdLocationOn className="mr-2" /> {profile.personalInfo.address}, {profile.personalInfo.city}, {profile.personalInfo.province}, {profile.personalInfo.postalCode}, {profile.personalInfo.country}
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">Education</h2>
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
        <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">Skills</h2>
        <div className="grid grid-cols-2 gap-6">
          {profile.skills.map((skill) => (
            <p key={skill._id} className="italic">● {skill.name}</p>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">Projects</h2>
        {profile.projects.map((project) => (
          <div key={project._id} className="mb-4">
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p>● {project.skillsUsed}</p>
            <p className="italic">{project.description}</p>
            {project.link && <a href={project.link} className="text-blue-500 underline">{project.link}</a>}
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">Work Experience</h2>
        {profile.experience.map((exp) => (
          <div key={exp._id} className="mb-4">
            <div className="flex justify-between">
              <h3 className="text-lg font-bold">{exp.company}</h3>
              <p>{exp.city}, {exp.province}</p>
              <p>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</p>
            </div>
            <p className="italic">{exp.position}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-purple-700 border-b-2 border-purple-700 pb-2 mb-2">Achievements</h2>
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
  );
};

export default Template2;
