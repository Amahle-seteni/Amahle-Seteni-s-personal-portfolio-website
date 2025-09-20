import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { usePDF } from 'react-to-pdf';
import { personalInfo, skills, education, experiences, achievements } from "@/lib/constants";

const ResumeDownload = () => {
  const { toPDF, targetRef } = usePDF({
    filename: `${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`,
    page: { margin: 15 }
  });

  return (
    <div>
      <Button 
        onClick={() => toPDF()} 
        className="flex items-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
      >
        <Download className="mr-2 h-4 w-4" />
        Download Resume
      </Button>

      {/* Hidden resume template that will be converted to PDF */}
      <div className="hidden">
        <div ref={targetRef} className="p-8 max-w-[800px] bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>
          {/* Header */}
          <div className="border-b-2 border-gray-300 pb-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">{personalInfo.name}</h1>
            <h2 className="text-xl text-primary font-medium mt-1">{personalInfo.role}</h2>
            <div className="flex flex-wrap mt-3 text-gray-600">
              <div className="mr-4 mb-2">{personalInfo.email}</div>
              <div className="mr-4 mb-2">{personalInfo.phone}</div>
              <div className="mb-2">{personalInfo.location}</div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Professional Summary</h3>
            <p className="text-gray-700">{personalInfo.description}</p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Key Skills</h3>
            <div className="flex flex-wrap">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-100 px-3 py-1 rounded-full mr-2 mb-2 text-gray-700">
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Work Experience</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-800">{exp.role}</h4>
                    <h5 className="text-primary">{exp.company}</h5>
                  </div>
                  <span className="text-gray-600 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-700 my-2">{exp.description}</p>
                <ul className="list-disc pl-5">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700 mb-1">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                    <h5 className="text-primary">{edu.institution}</h5>
                  </div>
                  <span className="text-gray-600 text-sm">{edu.period}</span>
                </div>
                <p className="text-gray-700 my-2">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Certifications</h3>
            <div className="grid grid-cols-1 gap-2">
              {achievements.map((cert, index) => (
                <div key={index} className="flex justify-between">
                  <span className="font-medium text-gray-800">{cert.title}</span>
                  <span className="text-gray-600">{cert.organization}, {cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownload;