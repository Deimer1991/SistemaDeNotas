// Hacer el Footer 
//Esto lo realiza un participante del grupo 

const Footer = () => {
  return (
    <footer className="w-full bg-blue-700 text-white text-center py-4">
      © {new Date().getFullYear()} Proyecto CESDE - Sistema de Notas
    </footer>
  );
};

export default Footer;