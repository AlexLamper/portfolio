const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <a href="https://lucerny.nl"><time>{YEAR}</time>© Lucerny</a>
        <a id="rss" href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        #rss {
          float: right;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </footer>
  ),
}
