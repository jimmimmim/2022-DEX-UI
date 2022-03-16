import logo from './logo.svg';
import './App.css';
import './css/sb-admin-2.css';
import './css/sb-admin-2.min.css';
import './vendor/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a class="alert-btn" href="index.html" role="button">
          <i class="fas fa-laugh-wink"></i>
        </a>
        <div class="updown-line"></div>
        <a class="profile-btn" href="index.html" role="button">
          <span class="wallet-address">Hwayeon Lee</span>
          <i class="fas fa-laugh-wink"></i>
        </a>
      </header>
      <div class="side-navbar">
      <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                <div class="sidebar-brand-icon rotate-n-15">
                    <i class="fas fa-laugh-wink"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Full Cart</div>
            </a>

            <hr class="sidebar-divider my-0"/>

            <li class="nav-item active">
                <a class="nav-link" href="index.html">
                    <span class="text-uppercase">Dashboard</span></a>
            </li>
            <hr class="sidebar-divider"/>
            <li class="nav-item">
                <a class="nav-link" href="index.html">
                    <span class="text-uppercase">Swap</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div class="bg-white py-2 collapse-inner rounded">
                        <h6 class="collapse-header">Custom Components:</h6>
                        <a class="collapse-item" href="buttons.html">Buttons</a>
                        <a class="collapse-item" href="cards.html">Cards</a>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html">
                    <span class="text-uppercase">Liquidity</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="index.html">
                    <span class="text-uppercase">Market</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="charts.html">
                    <span class="text-uppercase">Transactions</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="tables.html">
                    <span class="text-uppercase">Tables</span></a>
            </li>
        </ul>
      </div>

        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="js/sb-admin-2.min.js"></script>
        <script src="vendor/chart.js/Chart.min.js"></script>
        <script src="js/demo/chart-area-demo.js"></script>
        <script src="js/demo/chart-pie-demo.js"></script>
    </div>
  );
}

export default App;
