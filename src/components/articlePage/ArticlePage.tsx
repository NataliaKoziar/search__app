import s from "./ArticlePage.module.scss"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ICharacter } from "../../redux/models";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { charactersActions } from "../../redux/action/charactersActions";
import { Modal } from "../modal/Modal";
import { LoadingConponent } from "../modal/LoadingComponent";



export const ArticlePage = ()=>{
    const loading = useTypedSelector(state=>state.characters.loading);
    const dispatch = useDispatch();
    const [item, setItem]=useState<ICharacter>();
    const{title}=useParams();
    const navigate = useNavigate();


    const goBack=()=>{
        navigate(-1)
    }
    
    useEffect(()=>{
        dispatch(charactersActions.setLoading(true))
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?&api-key=PhcGfigday1YcAkEcyyPrGb2b1fuXZ9G&query=${title}`)
        .then(response => response.json())
        .then(response => {          
            setItem(response.results[0]);
            dispatch(charactersActions.setLoading(false))
        })
        .catch(err => console.error(err));
  
    },[title])

    return(
        <div className={s.container}>
           {loading? <Modal children={<LoadingConponent />}></Modal> :
           <>
            <div className={s.header_container} style={{backgroundImage:`url(${item?.multimedia?.src})`}}></div>
            <div className={s.article}>
                <div className={s.title}>{item?.display_title}</div>
                <div className={s.description}>
                    {item?.summary_short}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem possimus iste voluptates ut eius obcaecati culpa cum saepe maiores? Laboriosam expedita minima inventore tempora, iure quas incidunt, soluta, eius fugit aspernatur repudiandae rerum sunt ipsam sit. Praesentium fuga nisi maiores doloribus dignissimos quas. Non qui reprehenderit eaque dolor ullam ex, temporibus incidunt vitae numquam praesentium, molestias quasi aspernatur illo deleniti odit similique reiciendis officia rem tempore. Dolorem quod repellat sit ipsam tenetur minus officiis, provident ipsa itaque reiciendis pariatur, odio, quia quos autem. Quae quisquam ullam praesentium eligendi ad dicta, placeat iure voluptates vitae quaerat! Earum quis molestias esse facere perspiciatis beatae in sed eligendi quisquam fugit, at consequuntur nihil aut ea saepe magni dignissimos accusamus, commodi fuga repellat officiis. Hic perspiciatis eveniet sed harum autem provident magni aspernatur saepe unde alias, ut enim deserunt architecto dolore tempore assumenda corrupti ratione cumque? Doloremque at impedit perferendis labore dolorem reiciendis porro atque, quas soluta pariatur! Nihil dignissimos aperiam, voluptatibus adipisci, ad sapiente eaque sequi expedita accusantium deleniti maxime quae nostrum! Culpa totam cumque facilis libero! Omnis magnam id explicabo! Pariatur cupiditate voluptates nostrum perspiciatis quos! Velit dolorum aspernatur repellendus! Alias reiciendis, tempora natus praesentium necessitatibus dolorum omnis quo, deserunt recusandae aliquid ut expedita labore aperiam minima deleniti optio accusamus facere adipisci ipsa delectus asperiores enim quia blanditiis debitis? Quae aperiam, aliquid pariatur rerum corrupti sunt corporis quis hic saepe doloremque, laboriosam eaque obcaecati, architecto eius perspiciatis dignissimos molestiae! Modi assumenda earum, delectus deleniti exercitationem commodi ducimus totam eos alias iste corrupti possimus aliquam. Sit assumenda repellat ullam rerum fugiat, natus mollitia quam sint doloremque, ducimus id excepturi eius enim qui. Vero illo nulla optio eveniet aspernatur sit corrupti deleniti aut error incidunt. Eos laborum autem perspiciatis laboriosam aspernatur, a, dolor quos explicabo beatae architecto unde sequi soluta qui iste sed dolorum placeat tenetur, mollitia nulla nihil accusamus eligendi ad vero aliquid. A saepe vitae similique amet debitis, sed inventore, adipisci esse, est animi officia. Nihil dignissimos possimus aut eum consequatur quaerat? Odio harum corporis hic. Repellendus maxime suscipit delectus corrupti at veritatis itaque eveniet voluptatum recusandae, qui quibusdam quia id vero beatae explicabo expedita nostrum ipsum mollitia error aut ullam vel accusamus. Architecto maiores ex molestiae earum laudantium esse nostrum cupiditate minima quaerat ratione quod quas repellendus optio tempore doloremque harum, autem illo unde at, sunt ullam mollitia, debitis recusandae dolor. Vitae officia quis id sapiente quo quas porro tempora. Aut rem doloribus reprehenderit dolorum! Temporibus in aliquid nam, officia nisi accusantium qui minima dolorum saepe omnis magni, officiis distinctio dolor possimus. At assumenda et eaque cum quas, dignissimos ipsam voluptas fugiat enim neque voluptate atque. Itaque eius repudiandae quos iusto eveniet. Et voluptas, maiores, officiis aperiam tempora accusamus a repellendus facere totam provident culpa perspiciatis velit magnam, dignissimos veritatis. Aliquam, veritatis laboriosam impedit quam asperiores reprehenderit officiis quaerat. Earum, temporibus quibusdam dolorum velit distinctio perferendis impedit aperiam dolore, veritatis nostrum voluptatum ad vel inventore sapiente, eius numquam nisi beatae hic fugit quos vero amet pariatur! Exercitationem amet laudantium quis deleniti distinctio sit id cupiditate quae, sapiente dolore. Perspiciatis voluptatem cum animi error ullam ipsa eos magnam blanditiis? Iste perspiciatis consequatur, amet consequuntur numquam sit! Sit enim cum, adipisci similique et veritatis, hic ducimus commodi, itaque minus at dolore. Maiores quae, amet harum laborum architecto, blanditiis cumque tempore dignissimos ipsam nam ad? Nostrum vero a, velit laudantium accusantium dolores. Quasi, qui quo rerum, voluptatum cumque minus dicta deleniti blanditiis voluptate modi alias eaque culpa tempora numquam id iusto rem unde? Nemo facere beatae, esse libero maxime architecto nostrum quibusdam, omnis veritatis, ullam quasi. Totam molestiae, delectus dolores voluptate vero dolorem debitis officia minima consectetur inventore ipsum porro non doloremque quidem consequuntur fuga explicabo deserunt, assumenda ut eveniet mollitia, aliquid saepe. Dignissimos sapiente magnam explicabo quidem distinctio perspiciatis totam ad dolore illum aliquam velit officiis saepe rem ipsam, recusandae odit hic modi. Eaque odit, id magni illum, nam earum sint, itaque voluptas sit cumque facilis delectus enim natus! </div>
            </div>
            <div className={s.btn} onClick={goBack}>
            <ArrowBackIcon/>
            <span>Back to homepage</span>
            </div>
            </>}
        </div>
    )
}