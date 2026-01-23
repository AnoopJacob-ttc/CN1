const experiments = [
    {
        no: 1,
        name: `<strong>FAMILIARIZATION OF PACKET TRACER & NAVIGATE THE IOS</strong><br>
               <em>&emsp; - Explore EXEC Modes</em><br>
               <em>&emsp; - Set the Clock</em>`,
	hours: 2
    },
    {
        no: 2,
        name: `<strong>CONFIGURE INITIAL SWITCH SETTINGS</strong><br>
               <em>&emsp; - Host Name</em><br>
               <em>&emsp; - Banner MOTD</em><br>
	       <em>&emsp; - Save Configuration Files to NVRAM</em>`,
	hours: 2
    },
{
        no: 3,
        name: `<strong>CONFIGURE INITIAL SWITCH SETTINGS</strong><br>
               <em>&emsp; - Verify the Default Switch Configuration</em><br>
               <em>&emsp; - Disable DNS lookup</em><br>
               <em>&emsp; - Configure domain name</em><br>
               <em>&emsp; - Enable Password</em><br>
               <em>&emsp; - Enable Secret</em><br>
	       <em>&emsp; - Save Configuration Files to NVRAM</em>`,
	hours: 2
    },
{
        no: 4,
        name: `<strong>CONFIGURE INITIAL SWITCH SETTINGS</strong><br>
               <em>&emsp; - Configure Line Passwords</em><br>
               <em>&emsp; - Encrypt all plain text passwords</em><br>
               <em>&emsp; - Logging synchronous</em><br>
               <em>&emsp; - Exec timeout</em><br>
	       <em>&emsp; - Save Configuration Files to NVRAM</em>`,
	hours: 2
    },
{
        no: 5,
        name: `<strong>IMPLEMENT BASIC CONNECTIVITY</strong><br>
               <em>&emsp; - Perform Basic Configurations on a Switch</em><br>
               <em>&emsp; - Configure the PCs</em><br>
               <em>&emsp; - Configure the Switch Management Interface</em>`,
	hours: 2
    },
{
        no: 6,
name: `<strong>CONNECT A WIRED AND WIRELESS LAN</strong><br>
       <em>&emsp; - Connect to the Wireless Router Web Interface</em><br>
       <em>&emsp; - Configure Wireless Security Settings</em><br>
       <em>&emsp; - Connect Laptop to Wireless Router</em><br>
       <em>&emsp; - Configure the Access Point</em><br>
       <em>&emsp; - Connect Laptop to Access Point</em>`,
	hours: 2
    },
{
        no: 7,
        name: `<strong>CONFIGURE INITIAL ROUTER SETTINGS</strong><br>
               <em>&emsp; - Verify the Default Router Configuration</em><br>
               <em>&emsp; - Configure and Verify the Initial Router Configuration</em><br>
               <em>&emsp; - Save the Running Configuration File</em>`,
	hours: 2
    },
{
        no: 8,
        name: `<strong>BASIC SUBNETTING AND HOST ASSIGNMENT</strong><br>
               <em>&emsp; - Subnet 192.168.10.0/24 into 4 equal subnets</em><br>
               <em>&emsp; - Identify for each subnet: Network, Broadcast, First & Last Usable, Valid Host Range, Prefix, and Subnet Mask</em><br>
               <em>&emsp; - Assign IPs to 8 PCs (two per subnet)</em><br>
               <em>&emsp; - Connect all PCs to a switch and verify with ping — only PCs in the same subnet should communicate</em>`,
	hours: 2
    },
{
    no: 9,
    name: `<strong>VLSM DESIGN AND IMPLEMENTATION PRACTICE (USING PKA)</strong><br>
           <em>&emsp;- Examine the Network Requirements</em><br>
           <em>&emsp;- Design the VLSM Addressing Scheme</em><br>
           <em>&emsp;- Assign IP Addresses to Devices and Verify Connectivity</em>`,
	hours: 4
},
{
    no: 10,
    name: `<strong>DESIGN AND IMPLEMENT A VLSM ADDRESSING (USING PKA)</strong><br>
           <em>&emsp;- Open the given Packet Tracer (.pka) file and complete all the configuration tasks as instructed within the activity</em>`,
	hours: 2
},
{
    no: 11,
    name: `<strong>CONNECT A ROUTER TO A LAN USING IPV4 ADDRESSING</strong><br>
           <em>&emsp;- Display Router Information</em><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure Router Interfaces</em><br>
           <em>&emsp;- Verify the Configuration</em>`,
	hours: 2
},
{
    no: 12,
    name: `<strong>CONNECT A ROUTER TO A LAN USING IPV6 ADDRESSING</strong><br>
           <em>&emsp;- Display Router Information</em><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure Router Interfaces</em><br>
           <em>&emsp;- Verify the Configuration</em>`,
	hours: 2
},
{
    no: 13,
    name: `<strong>EXAMINE THE ARP TABLE (USING PKA)</strong><br>
           <em>&emsp;- Examine an ARP Request</em><br>
           <em>&emsp;- Examine a Switch MAC Address Table</em><br>
           <em>&emsp;- Examine the ARP Process in Remote Communication</em>`,
	hours: 2
},
{
    no: 14,
    name: `<strong>CONFIGURE SECURE PASSWORDS, SSH, AND TELNET ON A CISCO ROUTER</strong><br>
           <em>&emsp;- Configure secure Password</em><br>
           <em>&emsp;- Configure SSH & Telnet</em><br>
           <em>&emsp;- Verify SSH & Telnet</em>`,
	hours: 2
},
{
    no: 15,
    name: `<strong>CONFIGURE DHCP SERVER FOR MULTIPLE NETWORKS</strong><br>
           <em>&emsp;- Connect and set basic configs on all devices</em><br>
           <em>&emsp;- Assign different IPv4 networks to each LAN</em><br>
           <em>&emsp;- Configure Server as DHCP server for all networks</em><br>
           <em>&emsp;- Verify PCs get IPs automatically and test with ping</em>`,
	hours: 2
},
{
    no: 16,
    name: `<strong>CONNECT TWO NETWORKS USING A CISCO ROUTER (IPV4 AND IPV6)</strong><br>
           <em>&emsp;- Connect two switches to the router</em><br>
           <em>&emsp;- Connect one PC to each switch</em><br>
           <em>&emsp;- Configure basic settings on all devices</em><br>
           <em>&emsp;- Assign different IPv4 and IPv6 networks to each LAN</em><br>
           <em>&emsp;- Configure router interfaces with IPv4 and IPv6 addresses</em><br>
           <em>&emsp;- Assign IP addresses to both PCs</em><br>
           <em>&emsp;- Implement SSH on the router for secure access</em><br>
           <em>&emsp;- Test connectivity between PCs using the ping command</em><br>
           <em>&emsp;- Verify directly connected networks</em>`,
	hours: 4
},
{
    no: 17,
    name: `<strong>TROUBLESHOOT CONNECTIVITY ISSUES (USING PKA)</strong><br>
           <em>&emsp;-  Troubleshoot and resolve connectivity issues, if possible.</em><br>
           <em>&emsp;- Otherwise, the issues should be clearly documented so they can be escalated.</em>`,
	hours: 2
},
{
    no: 18,
    name: `<strong>VLAN CONFIGURATION</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Verify the Default VLAN Configuration</em><br>
           <em>&emsp;- Configure VLANs</em><br>
           <em>&emsp;- Assign VLANs to Ports</em>`,
	hours: 2
},
{
    no: 19,
    name: `<strong>CONFIGURE TRUNKS</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure & Verify VLANs</em><br>
           <em>&emsp;- Configure Trunk</em>`,
	hours: 2
},
{
    no: 20,
    name: `<strong>CONFIGURE DTP</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure static trunking</em><br>
           <em>&emsp;- Configure and Verify DTP</em>`,
	hours: 2
},
{
    no: 21,
    name: `<strong>CONFIGURE ROUTER-ON-A-STICK INTER-VLAN IPV4 ADDRESSES</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Add VLANs to a Switch</em><br>
           <em>&emsp;- Configure Sub interfaces</em><br>
           <em>&emsp;- Test Connectivity with Inter-VLAN Routing</em>`,
	hours: 2
},
{
    no: 22,
    name: `<strong>CONFIGURE ROUTER-ON-A-STICK INTER-VLAN USING IPV6 ADDRESSES</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Add VLANs to a Switch</em><br>
           <em>&emsp;- Configure Sub interfaces</em><br>
           <em>&emsp;- Test Connectivity with Inter-VLAN Routing</em>`,
	hours: 2
},
{
    no: 23,
    name: `<strong>CONFIGURE LAYER 3 SWITCHING & INTER-VLAN ROUTING USING IPV4</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure Layer 3 Switching</em><br>
           <em>&emsp;- Configure Inter-VLAN Routing using IPv4 Addresses</em>`,
	hours: 2
},
{
    no: 24,
    name: `<strong>CONFIGURE LAYER 3 SWITCHING & INTER-VLAN ROUTING USING IPV6</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure Layer 3 Switching</em><br>
           <em>&emsp;- Configure Inter-VLAN Routing using IPv6 Addresses</em>`,
	hours: 2
},
{
    no: 25,
    name: `<strong>APPLY VLSM TO EFFICIENTLY USE IP ADDRESSES FOR MULTIPLE VLANS</strong><br>
           <em>&emsp;- Given the network 192.168.1.0/24, design a VLSM plan for the following requirements:</em><br>
           <em>&emsp;&emsp;VLAN 10 – 60 hosts</em><br>
           <em>&emsp;&emsp;VLAN 20 – 25 hosts</em><br>
           <em>&emsp;&emsp;VLAN 30 – 10 hosts</em><br>
           <em>&emsp;&emsp;VLAN 40 – 5 hosts</em><br>
           <em>&emsp;- Determine subnet masks and address ranges for each VLAN.</em><br>
           <em>&emsp;- Configure the addressing on a Router-on-a-Stick topology using a single router and four VLANs.</em><br>
           <em>&emsp;- Verify connectivity between all VLANs.</em>`,
	hours: 4
},
{
    no: 26,
    name: `<strong>CONFIGURE ETHERCHANNEL USING PAGP</strong><br>
           <em>&emsp;- Configure Basic Switch Settings</em><br>
           <em>&emsp;- Configure an EtherChannel with Cisco PAgP</em>`,
	hours: 2
},
{
    no: 27,
    name: `<strong>CONFIGURE ETHERCHANNEL USING LACP</strong><br>
           <em>&emsp;- Configure Basic Switch Settings</em><br>
           <em>&emsp;- Configure an 802.3ad LACP EtherChannel</em>`,
	hours: 2
},
{
    no: 28,
    name: `<strong>CONFIGURE STATIC ETHERCHANNEL</strong><br>
           <em>&emsp;- Configure Basic Switch Settings</em><br>
           <em>&emsp;- Configure a static EtherChannel (mode on) on both switches</em>`,
	hours: 2
},
{
    no: 29,
    name: `<strong>ROUTER AS DHCP SERVER</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Create two networks using one router</em><br>
           <em>&emsp;- Set up the router as DHCP Server for both networks</em><br>
           <em>&emsp;- Ensure end devices get IP addresses automatically</em>`,
	hours: 2
},
{
    no: 30,
    name: `<strong>CONFIGURE DHCPV6</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure and verify a Stateless DHCPv6 Server</em><br>
           <em>&emsp;- Configure and verify a Stateful DHCPv6 Server</em>`,
	hours: 2
},
{
    no: 31,
    name: `<strong>SKILLS INTEGRATION CHALLENGE</strong><br>
           <em>&emsp;- Open the given Packet Tracer (.pka) file and complete all the configuration tasks as instructed within the activity</em>`,
	hours: 2
},
{
    no: 32,
    name: `<strong>HSRP CONFIGURATION</strong><br>
           <em>&emsp;- Configure Basic Settings</em><br>
           <em>&emsp;- Configure an HSRP active router</em><br>
           <em>&emsp;- Configure an HSRP standby router</em><br>
           <em>&emsp;- Verify HSRP operation</em>`,
	hours: 4
},
{
    no: 33,
    name: `<strong>MINI LAB PROJECT: DESIGN AND CONFIGURE YOUR OWN NETWORK TOPOLOGY WITH PROPER IPV4 AND IPV6 ADDRESSING TO IMPLEMENT THE FOLLOWING:</strong><br>
           <em>&emsp;- Basic settings on all devices</em><br>
           <em>&emsp;- SSH configuration for secure access</em><br>
           <em>&emsp;- Create Data VLANs, Native VLAN, Management VLAN, and assign unused ports to another VLAN</em><br>
           <em>&emsp;- Connect a Wireless LAN</em><br>
           <em>&emsp;- Configure EtherChannel between switches</em><br>
           <em>&emsp;- Provide IP addresses to all end devices using DHCP</em><br>
           <em>&emsp;- Implement HSRP Operation</em><br>
           <em>&emsp;- Implement Inter-VLAN routing using either Router-on-a-Stick or Layer 3 Switching</em>`,
	hours: 8
}
    // Add more experiments here as needed
];


const theory = [
    {
	no: "<strong>1.0</strong>",
    	name: "<strong>BASIC NETWORK CONNECTIVITY AND COMMUNICATIONS</strong>",
    	hours: "<strong>3h</strong>"
    },
    {
        no: "1.1",
        name: "Networking Today",
        hours: 1
    },
    {
        no: "1.2",
        name: "CISCO IOS Access and IOS Navigation",
        hours: 1
    },
    {
        no: "1.3",
        name: "Protocols and Models",
        hours: 1
    },

    {
	no: "<strong>2.0</strong>",
    	name: "<strong>ETHERNET CONCEPTS</strong>",
    	hours: "<strong>4h</strong>"
    },
    {
        no: "2.1",
        name: "Physical Layer",
        hours: 1
    },
    {
        no: "2.2",
        name: "Binary Number Systems",
        hours: 1
    },
    {
        no: "2.3",
        name: "Hexadecimal Number Systems",
        hours: 1
    },
    {
        no: "2.4",
        name: "Data Link Layer, Ethernet Switching",
        hours: 1
    },
{
    no: "<strong>3.0</strong>",
    name: "<strong>COMMUNICATING BETWEEN NETWORKS</strong>",
    hours: "<strong>3h</strong>"
},
{
    no: "3.1",
    name: "Network Layer Characteristics, IPv4 and IPv6 Packet",
    hours: 1
},
{
    no: "3.2",
    name: "Routing",
    hours: 1
},
{
    no: "3.3",
    name: "ARP, MAC and IP",
    hours: 1
},
{
    no: "<strong>4.0</strong>",
    name: "<strong>IP ADDRESSING</strong>",
    hours: "<strong>7h</strong>"
},
{
    no: "4.1",
    name: "IPV4 Address Structure",
    hours: 1
},
{
    no: "4.2",
    name: "IPv4 Unicast, Broadcast, and Multicast",
    hours: 1
},
{
    no: "4.3",
    name: "Types of IPv4 Address",
    hours: 1
},
{
    no: "4.4",
    name: "Subnet an IPv4 Network",
    hours: 1
},
{
    no: "4.5",
    name: "VLSM",
    hours: 1
},
{
    no: "4.6",
    name: "IPv6 Address Representation, IPv6 Address Types",
    hours: 1
},
{
    no: "4.7",
    name: "ICMP Messages, Ping and Trace route Tests",
    hours: 1
},
{
    no: "<strong>5.0</strong>",
    name: "<strong>NETWORK APPLICATION COMMUNICATIONS</strong>",
    hours: "<strong>3h</strong>"
},
{
    no: "5.1",
    name: "Transport Layer",
    hours: 1
},
{
    no: "5.2",
    name: "Port Numbers",
    hours: 1
},
{
    no: "5.3",
    name: "Application Layer",
    hours: 1
},

{
    no: "<strong>6.0</strong>",
    name: "<strong>BUILDING AND SECURING A SMALL NETWORK</strong>",
    hours: "<strong>3h</strong>"
},
{
    no: "6.1",
    name: "Security Threats and Vulnerabilities, Device Security",
    hours: 1
},
{
    no: "6.2",
    name: "Network Attacks and Mitigations",
    hours: 1
},
{
    no: "6.3",
    name: "Devices in a Small Network, Host and IOS Commands",
    hours: 1
},
{
    no: "<strong>7.0</strong>",
    name: "<strong>SWITCHING CONCEPTS</strong>",
    hours: "<strong>3h</strong>"
},
{
    no: "7.1",
    name: "Configure a Switch with initial Settings",
    hours: 1
},
{
    no: "7.2",
    name: "Configure Switch Ports",
    hours: 1
},
{
    no: "7.3",
    name: "Frame Forwarding, Switching Domains",
    hours: 1
},

{
    no: "<strong>8.0</strong>",
    name: "<strong>VLANS AND INTER-VLAN ROUTING</strong>",
    hours: "<strong>6h</strong>"
},
{
    no: "8.1",
    name: "Overview of VLANs",
    hours: 1
},
{
    no: "8.2",
    name: "VLAN Configuration",
    hours: 1
},
{
    no: "8.3",
    name: "VLAN Trunks",
    hours: 1
},
{
    no: "8.4",
    name: "DTP",
    hours: 1
},
{
    no: "8.5",
    name: "Router-on-a-Stick Inter-VLAN Routing",
    hours: 1
},
{
    no: "8.6",
    name: "Inter-VLAN Routing using Layer3 Switches",
    hours: 1
},
{
    no: "<strong>9.0</strong>",
    name: "<strong>REDUNDANT NETWORKS</strong>",
    hours: "<strong>3h</strong>"
},
{
    no: "9.1",
    name: "Purpose of STP",
    hours: 1
},
{
    no: "9.2",
    name: "STP Operations",
    hours: 1
},
{
    no: "9.3",
    name: "EtherChannel",
    hours: 1
},

{
    no: "<strong>10.0</strong>",
    name: "<strong>DHCPv4 AND DHCPv6</strong>",
    hours: "<strong>5h</strong>"
},
{
    no: "10.1",
    name: "DHCPv4 Concepts",
    hours: 1
},
{
    no: "10.2",
    name: "Configure a CISCO IOS DHCPv4 Server and Client",
    hours: 1
},
{
    no: "10.3",
    name: "SLAAC",
    hours: 1
},
{
    no: "10.4",
    name: "DHCPv6",
    hours: 1
},
{
    no: "10.5",
    name: "FHRP Concepts",
    hours: 1
}

];


document.addEventListener("DOMContentLoaded", () => {

    // ===== LAB TABLE =====
    const labTable = document.getElementById("experimentTable");

    if (labTable) {
        let rows = "";
        experiments.forEach(exp => {
            rows += `
                <tr onclick="window.location.href='experiment${exp.no}.html'">
                    <td>${exp.no}</td>
                    <td>${exp.name}</td>
                    <td>${exp.hours}</td>
                </tr>
            `;
        });
        labTable.innerHTML = rows;
    }

    // ===== THEORY TABLE =====
    const theoryTable = document.getElementById("theoryTable");

    if (theoryTable) {
        let rows = "";
        theory.forEach(th => {
            const isChapter = th.no.includes("<strong>");
            const cleanNo = th.no.replace(/<[^>]*>/g, ''); // remove HTML tags for link

            rows += `
                <tr ${!isChapter ? `onclick="window.location.href='theory${cleanNo}.html'"` : ""}>
                    <td>${th.no}</td>
                    <td>${th.name}</td>
                    <td>${th.hours}</td>
                </tr>
            `;
        });
        theoryTable.innerHTML = rows;
    }

});