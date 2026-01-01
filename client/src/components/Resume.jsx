// src/components/profile/Resume.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../redux/actions/profileActions";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Layout from "./Layout";

const Resume = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);
  //const loading = useSelector(state => state.profile.loading);
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

  //if (loading) {
  // return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!profile) {
    return (
      <Layout>
        <div className="flex justify-center items-center h-96">
          <p className="text-xl text-gray-600">No profile data available</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto p-6 font-outfit">
        <div className=" font-montserrat p-10 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <div className=" pb-4 mb-4 text-center">
        <h1 className="text-3xl font-bold text-ocean-blue">
          {profile.personalInfo.name}
        </h1>
        <p className="flex justify-center items-center space-x-4">
          <span className="flex items-center">
            {" "}
            <MdEmail className="mr-2" /> {profile.personalInfo.email}
          </span>
          <span className="flex items-center">
            <MdPhone className="mr-2" /> {profile.personalInfo.phone}
          </span>
          <span className="flex items-center">
            <FaGlobe className="mr-2" />
            <a href={profile.personalInfo.website} className="underline">
              {profile.personalInfo.website}
            </a>
          </span>
        </p>
        <p>
          <span className="flex items-center justify-center">
            <MdLocationOn className="mr-2" /> {profile.personalInfo.address},{" "}
            {profile.personalInfo.city}, {profile.personalInfo.province},{" "}
            {profile.personalInfo.postalCode}, {profile.personalInfo.country}
          </span>
        </p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-ocean-blue border-b-2  border-ocean-blue pb-2 mb-2 pt-2 text-center ">
          Education
        </h2>
        {profile.education.map((edu) => (
          <div key={edu._id} className="mb-4">
            <div className="flex justify-between">
              <span className=" flex items-center gap-4">
                <h3 className="text-lg font-bold">{edu.institution}</h3>
                <p>
                  {edu.institutionCity}, {edu.institutionProvince}
                </p>
              </span>
              <p>
                {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
              </p>
            </div>
            <p className="italic">{edu.degree}</p>

            <p>{edu.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-ocean-blue border-b-2 border-ocean-blue pb-2 mb-2 text-center pt-2 ">
          Skills
        </h2>
        <div className="grid grid-cols-3 gap-x-36 ">
          {profile.skills.map((skill) => (
            <p key={skill._id} className="italic ">
              ● {skill.name}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-ocean-blue border-b-2 border-ocean-blue pb-2 mb-2 pt-2  text-center ">
          Projects
        </h2>
        {profile.projects.map((project) => (
          <div key={project._id} className="mb-4">
            <h3 className="text-lg font-bold"> {project.name}</h3>
            <p>● {project.skillsUsed}</p>
            <p className="italic">{project.description}</p>
            {project.link && (
              <a href={project.link} className="text-blue-500 underline">
                {project.link}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-ocean-blue border-b-2 border-ocean-blue pb-2 mb-2 pt-2  text-center">
          Work Experience
        </h2>
        {profile.experience.map((exp) => (
          <div key={exp._id} className="mb-4">
            <div className="flex justify-between">
              <span className=" flex items-center gap-4">
                <h3 className="text-lg font-bold">{exp.company}</h3>
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
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-ocean-blue border-b-2 border-ocean-blue pb-2 mb-2 pt-2  text-center">
          Achievements
        </h2>
        {profile.achievements.map((ach) => (
          <div key={ach._id} className="mb-4">
            <div className="flex justify-between">
              {" "}
              <h3 className="text-lg font-bold">{ach.title}</h3>
              <p>{formatDate(ach.date)}</p>
            </div>

            <p>{ach.description}</p>
          </div>
        ))}
      </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
