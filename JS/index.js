
        const token ="4d59d2710ab2462aaee393c14801f525"
        const baseUrl="https://api.football-data.org/v4/competitions/2000"

        function getStandings(){
            const url =`${baseUrl}/standings`
            axios.get(url, {
                headers: {
                    "X-Auth-Token": token
                }
            })
            .then((result) => {
                // console.log(result.data)

                // console.log(result.data.standings);

                const standings = result.data.standings
        document.getElementById("standings").innerHTML = ""
                for (standing of standings){
                    // console.log(standing.table)


        let tableContent = ""
                    for (row of standing.table){



                        // console.log(row)
                        tableContent+=`
                        <!-- TEAM -->
                                    <li class="list-group-item">
                                        <div class="row">
                                            <div class="col-sm-4 d-flex justify-content-center align-itmes-center" style="text-align: center;">
                                                <span class="flag">
                                                    <img 
                                                        style="width: 40px; height: 40px object-fit: cover;"
                                                        class="rounded-circle"
                                                        src="${row.team.crest}" alt=""
                                                    >
                                                </span>

                                                <h5 style="margin: auto 4px">
                                                    <b> ${row.team.tla} </b>
                                                </h5>
                                            </div> 
                                            
                                            <div class="col-sm-2" style="text-align: center;">
                                                ${row.won}
                                            </div>
                                            
                                            <div class="col-sm-2" style="text-align: center;">
                                                ${row.lost}
                                            </div>
                
                                            <div class="col-sm-2" style="text-align: center;">
                                                ${row.draw}
                                            </div>
                
                                            <div class="col-sm-2" style="text-align: center;">
                                                <b> ${row.points}</b>
                                            </div>
                                        </div>
                                    </li>
                                    <!--// TEAM //-->
                        `
            
                } 
                const content =  `

        <!-- STANDING COL -->
                        <div class="col-sm-6 mb-4">
                            <div class="card shadow border-none">
                                <div class="card-header bg-primary" style="text-align: center;">
                                    <b>${standing.group}</b>
                                </div>

                                <div class="row m-0 bg-secondary">
                                    <div class="col-sm-4" style="text-align: center;">
                                        team
                                    </div> 
                                    
                                    <div class="col-sm-2" style="text-align: center;">
                                        W
                                    </div>
                                    
                                    <div class="col-sm-2" style="text-align: center;">
                                        L
                                    </div>

                                    <div class="col-sm-2" style="text-align: center;">
                                        D
                                    </div>

                                    <div class="col-sm-2" style="text-align: center;">
                                        Pts
                                    </div>
                                </div>

                                <!-- TEAMS -->
                                <ul class="list-group list-group-flush">
                                    
                                    ${tableContent}
                                
                                </ul>
                                <!--// TEAMS //-->
                            </div>
                        </div>
                        <!--// STANDING COL //-->

                `
            document.getElementById("standings").innerHTML += content
            }
            })
        }


        // ..
        function getmatches(){
            const url =`${baseUrl}/matches`
            axios.get(url, {
                headers: {
                    "X-Auth-Token": token
                }
            })
            .then((result) => {
                console.log(result.data)

                const matches = result.data.matches

                
        document.getElementById("matches").innerHTML = ""
        

        for(match of matches){
            const homeTeam = match.homeTeam.tla 
            const awayTeam = match.awayTeam.tla
            const utcDate= match.utcDate
            const MatchTima=new Date(utcDate)
            const dateString = MatchTima.getUTCFullYear() + " / " + (MatchTima.getUTCMonth()+1) + "  /  " + MatchTima.getUTCDate() + "   <span class='fw-bold ms-2'>  " + MatchTima.getUTCHours() + ":" + MatchTima.getUTCMinutes() + " </span> " 
            if (homeTeam == null){
                continue
            }
            const content =`
            <!-- MATCH COL -->
                        <div class="col-sm-12">

                            <div class="card shadow rounded-pill mt-4" style="overflow: hidden;">
                                <div class="card-body p-0">
                                    <div class="row" style="height: 120px;">

                                        <!-- FIRST TEAM COL -->
                                        <div 
                                            class="col-sm-3 bg-primary d-flex flex-direction-column justify-content-center align-itmes-center"
                                            style="border-right: solid 5px #9b3755ff; "
                                        >

                                            <div class="d-flex align-items-center justify-content-center" >
                                                <!-- IMAGE AND TEAM NAME DIV -->
                                                <div>
                                                    <div class="flag">
                                                        <img 
                                                            style="width: 40px; height: 40px; object-fit: cover;"
                                                            class="rounded-circle"
                                                            src="${match.homeTeam.crest}" alt=""
                                                        >
                                                    </div>

                                                    <h5 style="margin: auto 4px">
                                                        <b> ${homeTeam ?? " __ "} </b>
                                                    </h5>
                                                </div>
                                                <!--// IMAGE AND TEAM NAME DIV// -->
                                            </div>
                                        </div>
                                        <!--// FIRST TEAM COL //-->

                                        <!-- MATCH INFO COL -->
                                        <div class="col-sm-6" style="text-align: center;">
                                        <div class="row" >
                                        <div class="col-sm-4" style="margin: auto 0px">
                                                <h3>
                                                    ${match.score.fullTime.home ?? " __ "}
                                                </h3>
                                        </div>
                                        <div class="col-sm-4" style="margin: auto 0px">
                                                <h6>${match.group ?? " __ "}</h6>
                                                <h1>X</h1>
                                                <h6>${dateString ?? " __ "}</h6>
                                        </div>
                                        <div class="col-sm-4" style="margin: auto 0px">
                                                <h3>
                                                    ${match.score.fullTime.away ?? " __ "}

                                                </h3>
                                        </div>
                                        
                                        </div>
                                            
                                        </div>
                                        <!--// MATCH INFO COL //-->


                                        <!-- SECOND TEAM COL -->
                                        <div 
                                            class="col-sm-3 bg-primary d-flex flex-direction-column justify-content-center align-itmes-center"
                                            style="border-left: solid 5px #9b3755ff; "
                                        >

                                            <div class="d-flex align-items-center justify-content-center" >
                                                <!-- IMAGE AND TEAM NAME DIV -->
                                                <div>
                                                    <div class="flag">
                                                        <img 
                                                            style="width: 40px; height: 40px; object-fit: cover;"
                                                            class="rounded-circle"
                                                            src="${match.awayTeam.crest}" alt=""
                                                        >
                                                    </div>

                                                    <h5 style="margin: auto 4px">
                                                        <b> ${awayTeam ?? " __ "} </b>
                                                    </h5>
                                                </div>
                                                <!--// IMAGE AND TEAM NAME DIV// -->
                                            </div>
                                        </div>
                                        <!--// SECOND TEAM COL //-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--// MATCH COL //-->


            `
            document.getElementById("matches").innerHTML += content
        }
            })
        }

        getStandings()
        getmatches()



