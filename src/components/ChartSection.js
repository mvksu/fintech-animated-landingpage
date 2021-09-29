import styled from "styled-components";
import { InnerLayout } from "../styles/Layout";
import ChartStats from "./ChartStats";
import chart from "./../img/chart.svg"
import AnimatedButton from "./AnimatedButton";
import { Bounce, Roll } from "react-reveal";

function ChartSection() {
    return (
        <ChartStyled>
            <InnerLayout>
                <div className="chart-container">
                    <div className="chart-left">
                        <div className="stats">
                            <div className="money">
                                <ChartStats name="Balance" amount="$250" />
                                <ChartStats name="Last Transaction" amount="$1,000" />
                            </div>
                            <img src={chart} alt="" />
                        </div>
                    </div>
                    <div className="chart-right">
                        <h3 className="secondary-heading">
                            Manage yout finances like a boss
                        </h3>
                        <Bounce right>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eos odit velit reiciendis voluptatum! Aperiam unde tenetur amet nesciunt provident inventore similique sunt tempora suscipit.
                            </p>
                            <AnimatedButton name="Learn More" />
                        </Bounce>
                    </div>
                </div>
            </InnerLayout>
        </ChartStyled>
    )
}

const ChartStyled = styled.section`
    .chart-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        @media screen and (max-width: 1340px) {
                grid-template-columns: 1fr;
            }
        .chart-left{
            width: 80%;
            @media screen and (max-width: 1347px) {
                width: 100%;
                margin-bottom: 3rem;
            }
            .stats{
                img {
                    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                    border-radius: 50px;
                    width: 100%;
                }        
                .money{
                    display: flex;
                    justify-content: space-between;
                    padding-bottom: 1.3rem;
                }
            }
        }
        .chart-right {
            p{
                padding: 1.3rem 0;
            }
        }
    }
`

export default ChartSection;