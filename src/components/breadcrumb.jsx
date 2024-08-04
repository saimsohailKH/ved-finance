function Breadcrumbs(props) {
  const { pageTitle, links, image } = props

  return (
    <main class="main">
      <div class="page-title dark-background" style={{backgroundImage: `url(${image})`}} >
        <div class="container position-relative">
          <h1>{pageTitle}</h1>
          <nav class="breadcrumbs">
            <ol>
              {
                links.map((link, index) => {
                  if (link.href === '') {
                    return (<li key={index}>{link.title}</li>);
                  } else {
                    return (<li key={index} className="current"><a href={link.href}>{link.title}</a></li>);
                  }
                })
              }
            </ol>
          </nav>
        </div>
      </div>
    </main>
  );
}

export default Breadcrumbs;