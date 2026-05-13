export default function Inicio() {
  return (
    <section id="inicio" className="container my-4">
      <div className="row g-4">

        {/* VIDEO */}
        <div className="col-12 col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/loxvxoBByYg?si=01UFWC8H-E6iiUQX"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* MAPA */}
        <div className="col-12 col-md-6">
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.810868840008!2d-99.60090256228969!3d19.972741348694466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d23618deb8dfcd%3A0x82c62deda673d07c!2sCECyTEM%20Plantel%20Jilotepec!5e1!3m2!1ses!2smx!4v1777348916941!5m2!1ses!2smx"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}