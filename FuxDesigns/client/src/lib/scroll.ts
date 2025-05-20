export function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 100, // Offset for the fixed navbar
      behavior: "smooth"
    });
  }
}
