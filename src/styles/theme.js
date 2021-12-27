const size = {
    mobile10: '300px',
    mobile9: '330px',
    mobile8: '370px',
    mobile7: '400px',
    mobile6: '450px',
    mobile5: '500px',
    mobile3: '600px',
    mobile2: '650px',
    mobile: '700px',
    tablet2: '800px',
    tablet: '900px',
    laptop: '1200px',
    laptop2: '1000px',
    desktop: '1800px',
  }
  
  const theme = {
    mainColor: '#0a4297',
    mobile10: `(max-width: ${size.mobile10})`,
    mobile9: `(max-width: ${size.mobile9})`,
    mobile8: `(max-width: ${size.mobile8})`,
    mobile7: `(max-width: ${size.mobile7})`,
    mobile6: `(max-width: ${size.mobile6})`,
    mobile5: `(max-width: ${size.mobile5})`,
    mobile3: `(max-width: ${size.mobile3})`,
    mobile2: `(max-width: ${size.mobile2})`,
    mobile: `(max-width: ${size.mobile})`,
    tablet2: `(max-width: ${size.tablet2})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop2: `(max-width: ${size.laptop2})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  }
  
export default theme