function PanelContent({ location }) {
  return (
    <div className="panel-content">
      <p>{location.description}</p>
      <ul>
        {location.content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default PanelContent
