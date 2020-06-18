import React from 'react';
import './BulmaFooterStyles.scss';


function BulmaFooter () {
 return (
   <>
     <footer class="footer bulma">
       <div class="content has-text-centered bulma">
         <p>
           <strong>QBGROUP</strong> by{" "}
           <a href="#qb">QBGROUP IT Team</a>. P.IVA 123456789
           <a href="#qb"> QBGROUP</a>. The
           website content is licensed{" "}
           <a href="#qb">
             Padova - Via ..... 35129
           </a>
           .
         </p>
       </div>
     </footer>
   </>
 );
}

export default BulmaFooter;