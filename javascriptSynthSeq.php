<?php ?>

<div>

    <link rel="stylesheet" href="css/seq_style.css">
    <link rel="stylesheet" href="css/synth_style.css">
    <div id="synth">
        <div id="oscs">
            <div id="osc1" class="osc">
                <h4>Osc 1</h4>
                <div class="waveForm">
                    <h5>Wave Form</h5>
                    <div class="ledLabel">
                        <input type="radio" id="osc1Led0" data-position="0" name="osc1Led" data-waveform="sine" data-osc="1" onclick="setWaveForm(this)">
                        <label for="osc1Led0"><span></span><img src="img/sine.png" alt="sine wave"></label>
                    </div>

                    <div class="ledLabel">
                        <input type="radio" id="osc1Led1" data-position="1" name="osc1Led" data-waveform="square" data-osc="1" onclick="setWaveForm(this)" checked>
                        <label for="osc1Led1"><span></span><img src="img/square.png" alt="square wave"></label>
                    </div>

                    <div class="ledLabel">
                        <input type="radio" id="osc1Led2" data-position="2" name="osc1Led" data-waveform="sawtooth" data-osc="1" onclick="setWaveForm(this)">
                        <label for="osc1Led2"><span></span><img src="img/sawtooth.png" alt="sawtooth wave"></label>
                    </div>

                    <div class="ledLabel">
                        <input type="radio" id="osc1Led3" data-position="3" name="osc1Led" data-waveform="triangle" data-osc="1" onclick="setWaveForm(this)">
                        <label for="osc1Led3"><span></span><img src="img/triangle.png" alt="triangle wave"></label>
                    </div>
                    <div class="ledLabel">
                        <div class="buttonDrop">
                            <button id="switchOsc1Wave" data-osc="1" onclick="setWaveForm(this)"></button>
                        </div>
                    </div>
                </div>

                <div class="gain">
                    <h5>Gain</h5>
                    <input id="osc1Gain" type="range" min="0" max="100" value="100" data-osc="1">
                </div>

                <div class="octave">
                    <h5>Octave</h5>
                    <div class="ledLabel">
                        <input type="radio" id="osc1OctLed0" data-position="0" name="osc1OctLed" data-osc="1" onclick="setOctave(this)" checked>
                        <label for="osc1OctLed0"><span></span>4'</label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="osc1OctLed1" data-position="1" name="osc1OctLed" data-osc="1" onclick="setOctave(this)" >
                        <label for="osc1OctLed1"><span></span>8'</label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="osc1OctLed2" data-position="2" name="osc1OctLed" data-osc="1" onclick="setOctave(this)" >
                        <label for="osc1OctLed2"><span></span>16'</label>
                    </div>

                    <div class="ledLabel">
                        <div class="buttonDrop">
                            <button id="switchOsc1Octave" data-osc="1" onclick="setOctave(this)"></button>
                        </div>
                    </div>
                </div>

                <div class="fineTune">
                    <h5>Fine Tune</h5>
                    <input id="osc1FineTune" type="range" min="-10" max="10" value="0" data-osc="1" step="1" list="range_snap">
                </div>
            </div>


            <div id="osc2" class="osc">
                <h4>Osc 2</h4>
                <div class="waveForm">
                    <h5>Wave Form</h5>
                    <div class="ledLabel">
                        <input type="radio" id="osc2Led0" data-position="0" name="osc2Led" data-waveform="sine" data-osc="2" onclick="setWaveForm(this)">
                        <label for="osc2Led0"><span></span><img src="img/sine.png" alt="sine wave"></label>
                    </div>

                    <div class="ledLabel">
                        <input type="radio" id="osc2Led1" data-position="1" name="osc2Led" data-waveform="square" data-osc="2" onclick="setWaveForm(this)">
                        <label for="osc2Led1"><span></span><img src="img/square.png" alt="square wave"></label>
                    </div>

                    <div class="ledLabel">
                        <input type="radio" id="osc2Led2" data-position="2" name="osc2Led" data-waveform="sawtooth" data-osc="2" onclick="setWaveForm(this)" checked>
                        <label for="osc2Led2"><span></span><img src="img/sawtooth.png" alt="sawtooth wave"></label>
                    </div>

                    <div class="ledLabel">
                        <input type="radio" id="osc2Led3" data-position="3" name="osc2Led" data-waveform="triangle" data-osc="2" onclick="setWaveForm(this)">
                        <label for="osc2Led3"><span></span><img src="img/triangle.png" alt="triangle wave"></label>
                    </div>
                    <div class="ledLabel">
                        <div class="buttonDrop">
                            <button id="switchOsc2Wave" data-osc="2" onclick="setWaveForm(this)"></button>
                        </div>
                    </div>
                </div>

                <div class="gain">
                    <h5>Gain</h5>
                    <input id="osc2Gain" type="range" min="0" max="100" value="100" data-osc="2">
                </div>

                <div class="octave">
                    <h5>Octave</h5>
                    <div class="ledLabel">
                        <input type="radio" id="osc2OctLed0" data-position="0" name="osc2OctLed" data-osc="2" onclick="setOctave(this)">
                        <label for="osc2OctLed0"><span></span>4'</label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="osc2OctLed1" data-position="1" name="osc2OctLed" data-osc="2" onclick="setOctave(this)">
                        <label for="osc2OctLed1"><span></span>8'</label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="osc2OctLed2" data-position="2" name="osc2OctLed" data-osc="2" onclick="setOctave(this)" checked>
                        <label for="osc2OctLed2"><span></span>16'</label>
                    </div>

                    <div class="ledLabel">
                        <div class="buttonDrop">
                            <button id="switchOsc2Octave" data-osc="2" onclick="setOctave(this)"></button>
                        </div>
                    </div>
                </div>

                <div class="fineTune">
                    <h5>Fine Tune</h5>
                    <input id="osc2FineTune" type="range" min="-10" max="10" value="0" data-osc="2" step="1" list="range_snap">
                </div>


            </div>

            <datalist id="range_snap">
                <option value="0">
            </datalist>
        </div>

        <br>

        <div id="pianoKeys"></div>






        <div id="sequencer">

            <datalist id="octaveNos">
                <ul>
                    <li>5</li>
                    <li>4</li>
                    <li>3</li>
                    <li>2</li>
                    <li>1</li>
                </ul>
            </datalist>

            <div id="octaveSlider">
                <input id="octaveRange" type="range" value="3" min="1" max="5" list="octaveRange_snap">
                <datalist id="octaveRange_snap">
                    <option value="1"></option>
                    <option value="2"></option>
                    <option value="3"></option>
                    <option value="4"></option>
                    <option value="5"></option>
                </datalist>
            </div>

            <div id="keys"></div>
            <div id="loops"></div>
            <div id="steps"></div>
            <div id="gains"></div>

            <div id="loopSpinner">
                <input id="loopLength" type="number" value="16" max="32" min="0" disabled>

                <div id="spinners">
                    <div class="buttonDrop spinnerButton">
                        <button id="spinnerUp">&#x25B2;</button>
                    </div>
                    <div class="buttonDrop spinnerButton">
                        <button id="spinnerDown">&#x25BC;</button>
                    </div>
                </div>

                <div id="loopButtons">

                    <div class="buttonDrop loopButton">
                        <button id="loop8">8</button>
                    </div>
                    <div class="buttonDrop loopButton">
                        <button id="loop16">16</button>
                    </div>
                    <div class="buttonDrop loopButton">
                        <button id="loop32">32</button>
                    </div>
                </div>

            </div>

            <div id="timeControl">
                <div class="buttonDrop playButton">
                    <button id="playButton" class="" onclick="checkIfPlaying()">&#9654;</button>
                </div>
            </div>

            <div id="patternButtons">
                <div class="row">
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternLed1" data-position="1" name="seqPatternLed" onclick="setPattern(this)" checked>
                        <label for="seqPatternLed1"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternLed2" data-position="2" name="seqPatternLed" onclick="setPattern(this)" >
                        <label for="seqPatternLed2"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternLed3" data-position="3" name="seqPatternLed" onclick="setPattern(this)" >
                        <label for="seqPatternLed3"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternLed4" data-position="4" name="seqPatternLed" onclick="setPattern(this)" >
                        <label for="seqPatternLed4"><span></span></label>
                    </div>
                </div>
                <div class="row buttonRow">
                    <div class="buttonDrop patternButton">
                        <button id="pattern1Button"  data-position="1" onclick="setPattern(this)">1</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="pattern2Button"  data-position="2" onclick="setPattern(this)">2</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="pattern3Button"  data-position="3" onclick="setPattern(this)">3</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="pattern4Button"  data-position="4" onclick="setPattern(this)">4</button>
                    </div>
                </div>
                <div class="row">
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternLed5" data-position="5" name="seqPatternLed" onclick="setPattern(this)" >
                        <label for="seqPatternLed5"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternLed6" data-position="6" name="seqPatternLed" onclick="setPattern(this)" >
                        <label for="seqPatternLed6"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternLed7" data-position="7" name="seqPatternLed" onclick="setPattern(this)" >
                        <label for="seqPatternLed7"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternLed8" data-position="8" name="seqPatternLed" onclick="setPattern(this)" >
                        <label for="seqPatternLed8"><span></span></label>
                    </div>
                </div>
                <div class="row buttonRow">
                    <div class="buttonDrop patternButton">
                        <button id="pattern5Button" data-position="5" onclick="setPattern(this)">5</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="pattern6Button" data-position="6" onclick="setPattern(this)">6</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="pattern7Button" data-position="7" onclick="setPattern(this)">7</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="pattern8Button" data-position="8" onclick="setPattern(this)">8</button>
                    </div>
                </div>
                <br><br>
                <div class="row">
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternBankLed1" data-position="1" name="seqPatternBankLed" onclick="setPatternBank(this)" checked>
                        <label for="seqPatternBankLed1"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternBankLed2" data-position="2" name="seqPatternBankLed" onclick="setPatternBank(this)" >
                        <label for="seqPatternBankLed2"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternBankLed3" data-position="3" name="seqPatternBankLed" onclick="setPatternBank(this)" >
                        <label for="seqPatternBankLed3"><span></span></label>
                    </div>
                    <div class="ledLabel">
                        <input type="radio" id="seqPatternBankLed4" data-position="4" name="seqPatternBankLed" onclick="setPatternBank(this)" >
                        <label for="seqPatternBankLed4"><span></span></label>
                    </div>
                </div>
                <div class="row buttonRow">
                    <div class="buttonDrop patternButton">
                        <button id="patternBank1Button" data-position="1" onclick="setPatternBank(this)">A</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="patternBank2Button" data-position="2" onclick="setPatternBank(this)">B</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="patternBank3Button" data-position="3" onclick="setPatternBank(this)">C</button>
                    </div>
                    <div class="buttonDrop patternButton">
                        <button id="patternBank4Button" data-position="4" onclick="setPatternBank(this)">D</button>
                    </div>
                </div>
            </div>

        </div>

    </div>

    <!--<script src="AddKeys.js"></script>-->
    <script src="js/Context.js"></script>
    <script src="js/Oscillator.js"></script>
    <script src="js/SynthSeq.js"></script>
</div>
