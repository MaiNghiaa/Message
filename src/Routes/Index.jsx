import { lazy, memo, Suspense } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group"
import LandingPage from "../Pages/LandingPage";
import Contact from "../Pages/Contact";
import { PATH_CONTACT, PATH_HOME } from "./path";
import { useRoutes } from "react-router-dom";
const PageLayout = lazy(() => import("../Layouts/Layouts"));


function Router() {
    const routes = [
        {
            element: (
                <Suspense fallback={<p>Loading....</p>}>
                    <TransitionGroup>
                        <CSSTransition key={location.key || ""}
                            timeout={{ enter: 300, exit: 300 }}
                            className="fade">
                            <PageLayout>
                            </PageLayout>
                        </CSSTransition>
                    </TransitionGroup>
                </Suspense>
            ),
            children: [
                { path: PATH_HOME, element: <LandingPage /> },
                { path: PATH_CONTACT, element: <Contact /> },
            ]
        }
    ]

    return useRoutes(routes);
}

export default memo(Router);