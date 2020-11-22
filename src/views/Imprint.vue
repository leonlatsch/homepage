<template>
    <div id="imprint">
        <BackToHome />

        <h1>{{ $t('views.imprint.title') }}</h1>

        <h2>{{ $t('views.imprint.title2') }}</h2>
        <p>{{ $t('views.imprint.address.name') }}<br />
        {{ $t('views.imprint.address.addressLine1') }}<br />
        {{ $t('views.imprint.address.addressLine2') }}<br/>
        {{ $t('views.imprint.address.addressLine3') }}</p>

        <h2>{{ $t('views.imprint.contact.title') }}</h2>
        <p><span class="title">{{ $t('views.imprint.contact.phone.title') }}</span><span>{{ $t('views.imprint.contact.phone.value') }}</span><br/>
        <span class="title">{{ $t('views.imprint.contact.mail.title') }}</span><span>{{ $t('views.imprint.contact.mail.value') }}</span></p>

        <h2>{{ $t('views.imprint.liability.content.title') }}</h2>
        <p> {{ $t('views.imprint.liability.content.name') }}<br/>
        {{ $t('views.imprint.liability.content.addressLine1') }}<br/>
        {{ $t('views.imprint.liability.content.addressLine2') }}<br/>
        {{ $t('views.imprint.liability.content.addressLine3') }}</p>

        <h3>{{ $t('views.imprint.liability.line1') }}</h3> 
        <p>{{ $t('views.imprint.liability.line2') }}</p>
        <p>{{ $t('views.imprint.liability.line3') }}</p>
        <h3>{{ $t('views.imprint.liability.line4') }}</h3> 
        <p>{{ $t('views.imprint.liability.line5') }}</p>
        <p>{{ $t('views.imprint.liability.line6') }}</p>
        <h3>{{ $t('views.imprint.copyright.line1') }}</h3>
        <p>{{ $t('views.imprint.copyright.line2') }}</p>
        <p>{{ $t('views.imprint.copyright.line3') }}</p>

        <p class="source">{{ $t('views.imprint.source.title') }} <a href="https://www.e-recht24.de" target="_blank">eRecht24</a></p>
    </div>
</template>

<script>
import BackToHome from '../components/BackToHome'

export default {
    name: 'Imprint',
    components: {
        BackToHome
    }
}
</script>

<style scoped>
.source a {
    color: slategray;
}

.title {
    margin-right: 10px;
}
</style>