import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <Avatar />
                <h1 className="text-2xl text-center leading-tight md:text-left
                md:text-5xl md:mt-10"> Toda mi {' '}
                    <span className="font-bold text-secondary">trayectoria profesional</span>
                </h1>

                <CounterServices />
                <TimeLine />
            </ContainerPage>
        </>
    );
}

export default AboutPage;