import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { personalInfo, skills, education, experiences, achievements } from "@/lib/constants";
import profileImage from "@assets/IMG-20250324-WA0000~2.jpg";

const ResumeGenerator = () => {
  const [profileImageData, setProfileImageData] = useState<string | null>(null);

  // Load and process the image when component mounts
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setProfileImageData(dataUrl);
      }
    };
    img.src = profileImage;
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
      title: `${personalInfo.name} - Resume`,
      author: personalInfo.name,
      subject: 'Resume',
      keywords: 'resume, cv, professional'
    });

    // Set font
    doc.setFont('helvetica', 'normal');
    
    // Add profile image if available
    if (profileImageData) {
      try {
        doc.addImage(
          profileImageData, 
          'JPEG', 
          140, // x position
          15,  // y position
          50,  // width
          50   // height
        );
      } catch (error) {
        console.error('Error adding image to PDF:', error);
      }
    }
    
    // Header
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0);
    doc.text(personalInfo.name, 20, 20);
    
    doc.setFontSize(16);
    doc.setTextColor(59, 130, 246); // primary blue color
    doc.text(personalInfo.role, 20, 30);
    
    // Contact info
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Email: ${personalInfo.email}`, 20, 40);
    doc.text(`Phone: ${personalInfo.phone}`, 20, 45);
    doc.text(`Location: ${personalInfo.location}`, 20, 50);
    
    // Horizontal line
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 55, 190, 55);
    
    // Professional Summary
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Professional Summary', 20, 65);
    
    doc.setFontSize(10);
    doc.setTextColor(70, 70, 70);
    const summaryLines = doc.splitTextToSize(personalInfo.description, 170);
    doc.text(summaryLines, 20, 72);
    
    // Skills
    let yPos = 72 + (summaryLines.length * 5);
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Key Skills', 20, yPos);
    
    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(70, 70, 70);
    
    // Create a skills string
    const skillsText = skills.map(skill => skill.name).join(' • ');
    const skillsLines = doc.splitTextToSize(skillsText, 170);
    doc.text(skillsLines, 20, yPos);
    
    // Work Experience
    yPos += (skillsLines.length * 5) + 10;
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Work Experience', 20, yPos);
    
    experiences.forEach((exp) => {
      yPos += 10;
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(exp.role, 20, yPos);
      
      doc.setFontSize(10);
      doc.setTextColor(59, 130, 246); // primary blue
      doc.text(exp.company, 20, yPos + 5);
      
      doc.setTextColor(100, 100, 100);
      doc.text(exp.period, 160, yPos + 5, { align: 'right' });
      
      doc.setTextColor(70, 70, 70);
      const descLines = doc.splitTextToSize(exp.description, 170);
      doc.text(descLines, 20, yPos + 12);
      
      yPos += (descLines.length * 5) + 12;
      
      // Add achievements if there's space
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      
      exp.achievements.forEach((achievement, i) => {
        const bulletText = `• ${achievement}`;
        const bulletLines = doc.splitTextToSize(bulletText, 165);
        doc.text(bulletLines, 25, yPos);
        yPos += (bulletLines.length * 5) + 2;
      });
      
      yPos += 5;
    });
    
    // Add a new page if we're getting close to the bottom
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    
    // Education
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Education', 20, yPos);
    
    education.forEach((edu) => {
      yPos += 10;
      
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.text(edu.degree, 20, yPos);
      
      doc.setFontSize(10);
      doc.setTextColor(59, 130, 246); // primary blue
      doc.text(edu.institution, 20, yPos + 5);
      
      doc.setTextColor(100, 100, 100);
      doc.text(edu.period, 160, yPos + 5, { align: 'right' });
      
      doc.setTextColor(70, 70, 70);
      const eduDescLines = doc.splitTextToSize(edu.description, 170);
      doc.text(eduDescLines, 20, yPos + 12);
      
      yPos += (eduDescLines.length * 5) + 18;
    });
    
    // Add a new page if we're getting close to the bottom
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    
    // Certifications
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Certifications', 20, yPos);
    
    yPos += 10;
    achievements.forEach((cert, index) => {
      doc.setFontSize(10);
      doc.setTextColor(70, 70, 70);
      doc.text(`• ${cert.title} - ${cert.organization}, ${cert.year}`, 25, yPos);
      yPos += 6;
    });
    
    // Save the PDF
    doc.save(`${personalInfo.name.replace(/\s+/g, '_')}_Resume.pdf`);
  };

  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = () => {
    setIsGenerating(true);
    
    // Add a small delay to allow the UI to update
    setTimeout(() => {
      try {
        generatePDF();
      } catch (error) {
        console.error('Error generating PDF:', error);
      } finally {
        setIsGenerating(false);
      }
    }, 100);
  };

  return (
    <Button 
      onClick={handleGeneratePDF} 
      className="flex items-center shadow-md gap-2 px-6 py-2 bg-gradient-to-r from-zinc-100 to-zinc-200 hover:from-white hover:to-zinc-100 border-zinc-300 text-zinc-700"
      variant="outline"
      disabled={isGenerating || !profileImageData}
    >
      {isGenerating ? (
        <>
          <div className="animate-spin h-4 w-4 border-2 border-gray-500 border-t-transparent rounded-full mr-2" />
          Generating...
        </>
      ) : (
        <>
          <Download className="h-4 w-4 mr-1" />
          Download Resume with Photo
        </>
      )}
    </Button>
  );
};

export default ResumeGenerator;