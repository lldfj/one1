/* let IOTA = require('iota.lib.js')
let iota = new IOTA({ provider: `http://52.90.116.172:14267` })
iota.api.getNodeInfo(function(error, success) {
    if (error) {
        console.error(error);
    } else {
        console.log(success);
    }
}); */


let Mam = require('mam.client.js')
let IOTA = require('iota.lib.js')

const iota = new IOTA({ provider: `http://52.90.116.172:14267` })

// Initialise MAM State
let mamState = Mam.init(iota)

// Set channel mode
/* mamState = Mam.changeMode(
    mamState,
    'restricted',
    'UVDNOCAKIEJUHVBVHQBX'
) */

    function callback(p) {
        var packet = JSON.parse(iota.utils.fromTrytes(p))
        console.log(packet)
      }
    
    Mam.fetch('ZDMAEKFIQB9NVQLILDLWGDWRGBYOXLNGSYZKWOOKLDVCSQLLCZMJ9OUAZPNYUMTVHPXXUCCSCMWVFIDOF','restricted','UUEZTWOZMBKXPVHKHNLA', (p) => callback(p))
    /* console.log(iota.utils.fromTrytes("ODGAXCHDTCADSBSCGADBGAXAGAQAGACDKDBDTCFDGADBGAIDGDTCFDUAUAVAGAQAGAGDHDPCHDIDGDGADBGAQBPCHDTCRAXCBDGAQAGAHDXCADTCGDHDPCADDDGADBVAZAXAWA9BXABBWAUA9BZAZAWAQAGAHDMDDDTCGADBGANBFDMDEAGDHDCDFDPCVCTCGAQAGA9DCDPCSCGADBGAMBCDBDGDIDADTCFDEAQBCDCDSCGDGAQAGASCTCDDPCFDHDIDFDTCGADBGABCXCBDVCPCDDCDFDTCGAQAGASCTCGDHDXCBDPCHDXCCDBDGADBGAACCDHDHDTCFDSCPCADGAQAGAHDTCADDDTCFDPCHDIDFDTCGADBBDID9D9DQAGADDCDGDXCHDXCCDBDGADBBDID9D9DQAGASCCDRCIDADTCBDHDGDGADBJCLCQAGA9DPCGDHDZBCDGDXCHDXCCDBDSBBDSCTCLDGADBUAQD")) */
    // ATSTGDE9UPNHHHIAPSL9SQYCXIOOUFYRXOTXYVEUAC99GIZLGEJAO9PWGYSZTABKIGW9NNHGFVTQFZRGX
    // CPXKTZPHGXMCFLVBJBI9KCGSNXOZWWIOVTJKYA9JDYTYEMMTGYRCYJCOYWGPIRG9PXLOERTIB9YSHYLDF
/* const asyncfetch = async () => {

    const result = await Mam.fetch('ZDMAEKFIQB9NVQLILDLWGDWRGBYOXLNGSYZKWOOKLDVCSQLLCZMJ9OUAZPNYUMTVHPXXUCCSCMWVFIDOF','restricted','UUEZTWOZMBKXPVHKHNLA')
    console.log(result)
}

asyncfetch () */