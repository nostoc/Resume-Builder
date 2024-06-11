// src/components/profile/Resume.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/actions/profileActions';

const Resume = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile.profile);
  //const loading = useSelector(state => state.profile.loading);
  const error = useSelector(state => state.profile.error);

  useEffect(() => {
    if (!profile) {
      dispatch(getProfile());
    }
  }, [dispatch, profile]);


  useEffect(() => {
    console.log('Profile data:', profile); 
  }, [profile]);

  //if (loading) {
   // return <div>Loading...</div>;
 // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <div className="font-montserrat p-10 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="border-b-2 pb-4 mb-4 text-center">
        <h1 className="text-3xl font-bold text-green-700">{profile.personalInfo.name}</h1>
        <p className="flex justify-center items-center space-x-4">
          <span>📧 {profile.personalInfo.email}</span>
          <span>📞 {profile.personalInfo.phone}</span>
          <span>🌐 <a href={profile.personalInfo.website} className="underline">{profile.personalInfo.website}</a></span>
        </p>
        <p>{profile.personalInfo.address}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-green-700 border-b-2 border-green-700 pb-2 mb-2">Education</h2>
        {profile.education.map(edu => (
          <div key={edu._id} className="mb-4">
            <h3 className="text-lg font-bold">{edu.institution}</h3>
            <p className="italic">{edu.degree}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-4 font-montserrat">
        <h2 className="text-xl font-semibold text-green-700 border-b-2 border-green-700 pb-2 mb-2">Skills</h2>
        <div className="grid grid-cols-2">
          <ul className="list-disc list-inside">
            {profile.skills.map(skill => (
              <li key={skill._id} className="italic">{skill.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-green-700 border-b-2 border-green-700 pb-2 mb-2">Projects</h2>
        {profile.projects.map(project => (
          <div key={project._id} className="mb-4">
            <h3 className="text-lg font-bold">{project.name}</h3>
            <p className="italic">{project.description}</p>
            {project.link && <a href={project.link} className="text-blue-500 underline">Project Link</a>}
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-green-700 border-b-2 border-green-700 pb-2 mb-2">Experience</h2>
        {profile.experience.map(exp => (
          <div key={exp._id} className="mb-4">
            <h3 className="text-lg font-bold">{exp.company}</h3>
            <p className="italic">{exp.position}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
