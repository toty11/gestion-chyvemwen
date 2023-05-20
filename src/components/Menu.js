import '../styles/menu.css'

function Menu({updateLocation}) {
    return (<section class="menu">
        <h1>Menu</h1>
        <ul>
            <li>
                <a href="/produits" onClick={() => updateLocation('Produits')}>Produits</a>
            </li>
            <li>
                <a href="/coaching" onClick={() => updateLocation('Coaching')}>Coaching</a>
            </li>
            <li>
                <a href="/rdv" onClick={() => updateLocation('Rendez-vous')}>Rendez-vous</a>
            </li>
        </ul>
        <button>Déconnexion</button>
    </section>)
}

export default Menu