let text = ["Pas je pripitomljeni sisar iz porodice Canidae. Arheološki nalazi dokazuju da pas najmanje 9000 godina živi uz čoveka, iako postoje indicije da se taj period produži na čitavih 14.000 godina. Fosilni ostaci pokazuju da su preci modernog psa živeli uz čoveka još pre 10.000 godina.",
            "Guska (množina guske) je zajednički naziv nekoliko vrsta plovuša iz porodice Anatidae. Ovu grupu čine rodovi Anser (siva guska), Branta (crna guska) i Chen (koji uključuje bele guske); zadnji od koji se često uključuje u rod Anser. Neke ptice, uglavnom povezane sa pegankama (utvama), u svojim imenima imaju reč „guska”. Dalji srodnici iz porodice Anatidae su labudovi, većina kojih je veća od pravih gusaka, i pataka, koje su manje.",
            "Domaća mačka (Felis silvestris forma catus), kućna mačka ili najčešće mačka je mali mesožder iz porodice mačaka. Prema istraživanju u Oxfordu, domaća mačka kao kućni ljubimac prvobitno potječe od vrste nalik libijskoj šumskoj mački, rijetkoj vrsti mačke, a spada u prvu pripitomljenu životinju te je puno je starija od psa, jer uz ljude živi najmanje 9 milijuna godina. Starije činjenice govore da je domaća mačka potekla od afričke divlje mačke. Mačka spada među omiljenim kućnim ljubimcima. Danas, široko rasprostranjena imena za mačku nastala su od vulgarne latinske riječi cattus. 69 milijuna mačaka živi u američkim domovima gdje su vrlo popularne, dok u cijelom svijetu živi preko 600 milijuna mačaka.",
            "Kokoška, kokoš ili domaća kokoš (lat. Gallus gallus domesticus) je podvrsta ptice koja se često gaji kao živina. Smatra se da je poreklom iz jugoistočne Azije, i da je evoluirala od divljih podvrsta vrste Gallus gallus. Ova ptica je najrasprostranjenija na zemlji,[1] sa totalnom populacijom od preko 19 milijardi po proceni iz 2011. godine.[2] Ljudi uzgajaju kokoške prvenstveno kao izvor hrane, konzumirajući njihovo meso i jaja.",
            "Krava je odrasla ženka.Mliječna krava se uzgaja zbog proizvodnje mlijeka, koje se prerađuje u brojne prehrambene proizvode: konzumno mlijeko, pavlaka, kajmak, razne vrste sireva, puter i slično. Domesticiranje je počelo prvo radi mesa, a kasnije radi mlijeka i njihove snage korištene za vuču. Mladunče krave se zove tele."]
function newWidnow1(){
    //document.write(text[0])
    //alert(text[0])
    window.open('https://sh.wikipedia.org/wiki/Pas');
}

function newWidnow2(){
    //document.write(text[1])
    //alert(text[1])
    window.open('https://sr.wikipedia.org/wiki/Guske');
}

function newWidnow3(){
    //document.write(text[2])
    //alert(text[2])
    window.open('https://sh.wikipedia.org/wiki/Mačka');
}

function newWidnow4(){
    //document.write(text[3])
    //alert(text[3])
    window.open('https://sr.wikipedia.org/sr-el/Kokoška');
}

function newWidnow5(){
    //document.write(text[4])
    //alert(text[4])
    window.open('https://sh.wikipedia.org/wiki/Krava');
}


var audio = new Audio('./videos/pasLaje.mp3');
function pasLaje(){
    audio.play();
}

function pasNeLaje(){
    audio.pause();
}

var audio1 = new Audio('./videos/guskaGace.mp3');
function guskaGace(){
    audio1.play();
}

function guskaNeGace(){
    audio1.pause();
}

var audio2 = new Audio('./videos/mackaMjauce.mp3');
function mackaMjauce(){
    audio2.play();
}

function mackaNeMjauce(){
    audio2.pause();
}

var audio3 = new Audio('./videos/pilePijuce.mp3');
function pilePijuce(){
    audio3.play();
}

function pileNePijuce(){
    audio3.pause();
}

var audio4 = new Audio('./videos/kravaMuce.mp3');
function kravaMuce(){
    audio4.play();
}

function kravaNeMuce(){
    audio4.pause();
}

